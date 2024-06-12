import React, { useState } from "react";
import Button from "../../components/Button";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import ProductImageUpload from "../../components/ProductImageUpload";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        name,
        description,
        sku,
        quantity: parseInt(quantity),
        price: parseFloat(price),
        images: uploadedImages,
      };

      const response = await api.post("/product", productData);

      setName("");
      setDescription("");
      setSku("");
      setQuantity("");
      setPrice("");
      setUploadedImages([]);

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
          Add new product
        </span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-14 my-10">
          <div className="grid grid-cols-2 text-lg font-medium">
            <div className="grid grid-cols-8">
              <p>SKU</p>
              <input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                className="bg-[#f7f7f7] h-[45px] col-span-5 rounded-lg border px-5"
                required={true}
              />
            </div>
            <div className="grid grid-cols-8">
              <p>Price</p>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-[#f7f7f7] h-[45px] col-span-5 rounded-lg border px-5"
                required={true}
                min={0}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 text-lg font-medium">
            <div className="col-start-1 grid grid-cols-8">
              <p>Name</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#f7f7f7] h-[45px] col-span-5 rounded-lg border px-5"
                required={true}
              />
            </div>
            <div className="grid grid-cols-8">
              <p>QTY</p>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="bg-[#f7f7f7] h-[45px] col-span-5 rounded-lg border px-5"
                required={true}
                min={0}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 text-lg font-medium">
          <div className="flex flex-col gap-4">
            <p>Product Description</p>
            <p className="text-sm text-[#969191] font-normal">
              A small description about the product
            </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="bg-[#f7f7f7] w-full rounded-lg border p-5"
            ></textarea>
          </div>
          <ProductImageUpload
            uploadedImages={uploadedImages}
            setUploadedImages={setUploadedImages}
          />
          <div className="flex justify-end">
            <Button buttonClass="primary" className="px-16" type="submit">
              Add product
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
