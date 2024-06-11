import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import Button from "../../components/Button";
import Row from "../../components/TableRow";
import StarredIcon from "../../assets/icons/starred.svg";
import api, { setAuthToken } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup";

export default function FavoriteProducts() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setAuthToken(token);

    const fetchProducts = async () => {
      try {
        const response = await api.get("/product/all");
        setProducts(response.data.products);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container bg-[#] mx-auto">
      <h1 className="uppercase text-[36px] font-bold tracking-widest">
        Favorite Products
      </h1>
      <div className="flex justify-between w-full bg-[] mt-10 mb-16">
        <Searchbar />
        <div className="flex items-center gap-3">
          <Button
            type="primary"
            onClick={() => {
              navigate("/add");
            }}
            className="px-16"
            title="Add new product"
          >
            New Product
          </Button>
          <Button
            type="secondary"
            onClick={() => {
              navigate("/main");
            }}
            className="px-5"
            title="Main Page"
          >
            <span className="material-symbols-outlined">home</span>
          </Button>
        </div>
      </div>
      <table className="container table-fixed text-lg font-medium">
        <thead>
          <tr className="text-[#001eb9] text-left uppercase">
            <th>SKU</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Row key={product.id} product={product} setShow={setShow} />
          ))}
        </tbody>
      </table>

      <Popup show={show} setShow={setShow} />
    </div>
  );
}
