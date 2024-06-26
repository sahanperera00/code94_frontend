import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import Button from "../../components/Button";
import Row from "../../components/TableRow";
import StarredIcon from "../../assets/icons/starred.svg";
import api, { setAuthToken } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup";
import EmptyComponent from "../../components/EmptyComponent";

export default function MainPage() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await api.get("/product/all");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setAuthToken(token);
    fetchProducts();
  }, [show]);

  return (
    <div className="container mx-auto">
      <h1 className="uppercase text-[36px] font-bold tracking-widest">
        Products
      </h1>
      <div className="flex justify-between w-full mt-10 mb-16">
        <Searchbar setSearchTerm={setSearchTerm} />
        <div className="flex items-center gap-3">
          <Button
            buttonClass="primary"
            onClick={() => {
              navigate("/add");
            }}
            className="px-16"
            title="Add new product"
          >
            New Product
          </Button>
          <Button
            buttonClass="secondary"
            onClick={() => {
              navigate("/favorites");
            }}
            className="px-5"
            title="Favorite products"
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
          {products.length > 0 ? (
            <>
              {products
                .filter((data) => {
                  if (searchTerm == "") {
                    return data;
                  } else if (
                    data.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                    return data;
                })
                .map((product) => (
                  <Row key={product.id} product={product} setShow={setShow} />
                ))}
            </>
          ) : (
            <EmptyComponent />
          )}
        </tbody>
      </table>

      <Popup show={show} setShow={setShow} />
    </div>
  );
}
