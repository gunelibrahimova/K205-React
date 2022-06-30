import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/Config";

const Detail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await fetch(BASE_URL + "product/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data.message));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h4>{products.name}</h4>
      <h6>{products.description}</h6>
      <p>{products.price}</p>
      <img width='500px' src={products.coverPhoto} alt="" />
    </div>
  );
};

export default Detail;
