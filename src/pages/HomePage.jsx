import React from "react";
import HeroSilder from "../sections/HeroSilder";
import ProductSilder from "../sections/ProductSilder";
import CatagorieSection from "../sections/CatagorieSection";
import Space from "../components/Space";
import HotProduct from "../sections/HotProduct";

const HomePage = () => {
    return (
        <>
            <HeroSilder />
            <ProductSilder />
            <CatagorieSection />
            <Space />
            <HotProduct />
        </>
    );
}

export default HomePage;