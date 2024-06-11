import React, { useState } from "react";
import Button from "../../components/Button";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function EditProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("10.00");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const productData = {
        name,
        description,
        sku,
        quantity: parseInt(quantity),
        price: parseFloat(10.0),
        images: ["1", "2"],
      };

      const response = await api.post("/product", productData);

      setSku("");
      setName("");
      setQuantity("");
      setDescription("");

      navigate("/main");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="uppercase text-[36px] font-bold tracking-widest flex gap-5 items-center">
        Products <span className="text-[#001eb9]">{">"}</span>
        <span className="text-[#001eb9] normal-case tracking-wider text-[24px] font-semibold">
          Edit product
        </span>
      </h1>
      <div className="grid grid-cols-2 space-y-10 text-lg bg-[#] font-medium my-5">
        <div className="grid grid-cols-8 items-center gap-10 my-5 bg-[#]">
          <p>SKU</p>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            className="bg-[#f7f7f7] h-[45px] col-span-5 rounded-lg border"
          />
        </div>
        <div className="col-start-1 grid grid-cols-8 items-center gap-10 my-5 bg-[#]">
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#f7f7f7] h-[45px] col-span-5 rounded-lg border"
          />
        </div>
        <div className="grid grid-cols-8 items-center gap-10 my-5 bg-[#]">
          <p>QTY</p>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="bg-[#f7f7f7] h-[45px] col-span-5 rounded-lg border"
          />
        </div>
        <div className="col-start-1 col-span-2 space-y-2">
          <p>Product Description</p>
          <p className="text-sm text-[#969191] font-normal">
            A small description about the product
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="bg-[#f7f7f7] w-full rounded-lg border"
          ></textarea>
        </div>
        <div className="col-start-1 col-span-2 flex gap-16 items-start">
          <div>
            <p>Product Images</p>
            <p className="text-sm text-[#969191] font-normal">
              JPEG, PNG, SVG or GIF <br />
              (Maximum file size 50MB)
            </p>
          </div>
          <a href="" className="text-[#001eb9] underline">
            Edit Images
          </a>
        </div>
        <div className="col-start-2 flex justify-end">
          <Button
            type="primary"
            onClick={() => {
              handleSubmit();
            }}
            className="px-16"
          >
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
}
