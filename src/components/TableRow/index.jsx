import React from "react";
import Image from ".././../assets/images/product-img.png";
import EditIcon from ".././../assets/icons/edit-icon.svg";
import DeleteIcon from ".././../assets/icons/delete-icon.svg";
import StarIcon from ".././../assets/icons/star.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function Row({ product }) {
  const navigate = useNavigate();

  return (
    <tr className="bg-[#] h-[100px] border-b ">
      <td className="text-[#969191]">#{product?.sku}</td>
      <td>
        <img src={Image} alt="product" className="h-[55px] w-auto rounded-lg" />
      </td>
      <td>{product?.name}</td>
      <td>${product?.price}</td>
      <td>
        <Button>
          <img src={DeleteIcon} alt="Delete" className="w-6 h-6" />
        </Button>
        <Button
          onClick={() => {
            navigate("/edit");
          }}
        >
          <img src={EditIcon} alt="Edit" className="w-6 h-6" />
        </Button>
        <Button>
          <img src={StarIcon} alt="Star" className="w-6 h-6" />
        </Button>
      </td>
    </tr>
  );
}
