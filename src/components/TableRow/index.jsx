import React from "react";
import Image from ".././../assets/images/product-img.png";
import EditIcon from ".././../assets/icons/edit-icon.svg";
import DeleteIcon from ".././../assets/icons/delete-icon.svg";
import StarIcon from ".././../assets/icons/star.svg";

export default function Row() {
  return (
    <tr className="bg-[#] font-semibold h-[100px] border-b">
      <td className="text-[#969191]">#CA25</td>
      <td>
        <img src={Image} alt="product" className="h-[55px] w-auto rounded-lg" />
      </td>
      <td>Product-name</td>
      <td>$24.00</td>
      <td className="space-x-5">
        <button className="text-red-500 hover:text-red-700">
          <img src={DeleteIcon} alt="Delete" className="w-5 h-5" />
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <img src={EditIcon} alt="Edit" className="w-5 h-5" />
        </button>
        <button className="text-yellow-500 hover:text-yellow-700">
          <img src={StarIcon} alt="Star" className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
}
