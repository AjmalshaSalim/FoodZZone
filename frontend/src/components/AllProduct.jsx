import React from "react";
import FilterProduct from "./FilterProduct";
import HomeCard from "./HomeCard";
import CardFeatures from "./CardFeatures";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import loadingSvg from "../assets/Rolling-1s-200px.svg";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  // console.log("All Products Data ->", productData);

  const categoryList = [...new Set(productData.map((el) => el.category))];
  // console.log("All Product Category List ->", categoryList);
  //Dummy
  const loadingArrayProduct = new Array(6).fill(null);

  //Filter Data Display
  const [filterBy, setFilterBy]=useState("")
  const [dataFilter, setDataFilter] = useState([]);
  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category)
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };
  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-5 my-5">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
      {categoryList[0]
  ? categoryList.map((el) => (
      <FilterProduct
        key={el}
        category={el}
        isActive={el.toLowerCase() === filterBy.toLowerCase()}
        onClick={() => handleFilterProduct(el)}
      />
    ))
  : loadingArrayProduct.map((el, index) => (
      <HomeCard
        key={index + "loading"}
        loading={<img src={loadingSvg} alt="Loading" />}
      />
    ))}
      </div>
      <div className="flex flex-wrap justify-center gap-5 my-4">
        {dataFilter.map((el) => {
          return (
            <CardFeatures
              id={el._id}
              key={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
