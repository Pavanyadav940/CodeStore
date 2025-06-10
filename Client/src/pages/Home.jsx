import FilterMenu from "@/components/custom/FilterMenu";
import HeaderDisplay from "@/components/custom/HeaderDisplay";
import Navbar from "@/components/custom/Navbar";
import ProductList from "@/components/custom/ProductList";
import React from "react";

const Home = () => {
  return (
    <div>
   <HeaderDisplay/>
   <FilterMenu/>
   <ProductList/>
    </div>
  );
};

export default Home;
