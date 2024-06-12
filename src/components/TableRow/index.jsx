import React, { useEffect, useState } from "react";
import Image from ".././../assets/images/product-img.png";
import EditIcon from ".././../assets/icons/edit-icon.svg";
import DeleteIcon from ".././../assets/icons/delete-icon.svg";
import StarIcon from ".././../assets/icons/star.svg";
import Starred from "../../assets/icons/starred.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { setEditProductId } from "../../services/actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api.js";

export default function Row({ product, setShow }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleDeleteClick = () => {
    dispatch(setEditProductId(product?.id));
    setShow(true);
  };

  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await api.delete(`/favorite/${product.id}`, { userId });
      } else {
        await api.post("/favorite", { userId: userId, productId: product.id });
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <tr className="bg-[#] h-[100px] border-b ">
      <td className="text-[#969191]">#{product?.sku}</td>
      <td>
        <img
          src={"http://localhost:4000" + product?.images[0]}
          alt="product"
          className="h-[55px] w-auto rounded-lg"
        />
      </td>
      <td>{product?.name}</td>
      <td>${product?.price}</td>
      <td>
        <Button
          onClick={() => {
            handleDeleteClick();
          }}
        >
          <img src={DeleteIcon} alt="Delete" className="w-6 h-6" />
        </Button>
        <Button
          onClick={() => {
            navigate("/edit");
          }}
        >
          <img src={EditIcon} alt="Edit" className="w-6 h-6" />
        </Button>
        <Button onClick={handleFavoriteClick}>
          <img
            src={isFavorite ? Starred : StarIcon}
            alt={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            className={`w-6 h-6 ${isFavorite ? "text-yellow-500" : ""}`}
          />
        </Button>
      </td>
    </tr>
  );
}
