import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import Button from "../../components/Button";
import Row from "../../components/TableRow";
import StarredIcon from "../../assets/icons/starred.svg";
import api, { setAuthToken } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup";

export default function MainPage() {
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
        Products
      </h1>
      <div className="grid grid-cols-2 mb-5">
        <Searchbar />
        <div className="flex justify-end gap-3">
          <Button
            type="primary"
            onClick={() => {
              navigate("/add");
            }}
            className="px-16"
          >
            New Product
          </Button>
          <Button
            type="secondary"
            onClick={() => {
              navigate("/favorites");
            }}
            className="px-5"
          >
            <img src={StarredIcon} alt="Edit" className="w-6 h-6" />
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
