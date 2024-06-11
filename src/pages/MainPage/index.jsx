import React from "react";
import Header from "../../Layouts/Header";
import Searchbar from "../../components/Searchbar";
import Button from "../../components/Button";
import Row from "../../components/TableRow";

export default function MainPage() {
  return (
    <div className="container bg-[#] h-screen mx-auto">
      <Header />
      <h1 className="uppercase text-[36px] font-bold tracking-widest">
        Products
      </h1>
      <div className="grid grid-cols-2 mb-5">
        <Searchbar />
        <div className="flex justify-end gap-3">
          <Button
            type="primary"
            onClick={() => {}}
            className="px-16"
          >
            New Product
          </Button>
          <Button type="secondary" onClick={() => {}} className="px-5">
            *
          </Button>
        </div>
      </div>
      <table className="container table-fixed">
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
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    </div>
  );
}
