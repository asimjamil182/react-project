import React, { useState, useEffect } from "react";
import Api from "../api/Api";
import {useNavigate, useParams } from "react-router-dom";
import ProductShowCase from "../components/ProductShowCase";
import { Dash, Plus } from "react-bootstrap-icons";
import ProductSilder from "../sections/ProductSilder";
import StarRating from "../components/StarRating";
import Spinner from "../components/Spinner";
import { Product } from "../modals/Frontend_Api";


const ProductPage = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [product, setproduct] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const productdata = async () => {
            const product = await Product(id);
            if (product) {
                setproduct(product);
            }else{
                navigate("/nopage");
            } 
        }
        productdata();
    }, [id]);

    async function addtocard() {
        setloading(true);
        const response = await Api.post(`/cart`, { product_id: id });
        if (response.statusText == 'Created') {
            setInterval(() => {
                setloading(false);
            }, 2000);
        }else{
            setInterval(() => {
                setloading(false);
            }, 2000);
        }
    }
    return (
        <div className="product-page">
            <div className="flex py-5 md:px-3 lg:px-0 flex-wrap md:flex-nowrap">
                <div className="w-full md:w-[50%]">
                    <ProductShowCase image={product.product_img} />
                </div>
                <div class="w-full md:w-[50%] px-4 relative">
                    <div class="text-3xl text-color2 mt-2">{product.product_name}</div>
                    <div class="text-primary uppercase mt-2 font-semibold"><span>Price :</span> <span>{product.product_saleprice}</span>
                        <span> AED</span></div>
                    <div className="mt-2"><StarRating rating={4}/></div>
                    <div class="mt-2">
                        <div class="uppercase text-sm font-semibold">Quantitiy</div>
                        <div class="flex w-[140px] border items-center rounded-full overflow-hidden">
                            <div class="w-[40px]  text-center p-2 cursor-pointer text-xl"><Dash /></div>
                            <div class="w-[60px]"><input type="text" name="" value="1" class="appearance-none text-center w-full p-2 focus:outline-none" id="" /></div>
                            <div class="w-[40px] text-center p-2 cursor-pointer text-xl"><Plus /></div>
                        </div>
                    </div>
                    <div class="grid grid-flow-col self-end gap-x-3 mt-2 max-h-7 mb-4 md:absolute md:left-0 md:right-0 md:bottom-0">
                        <button onClick={addtocard} class="flex-1 border p-2 rounded-full uppercase">{loading?<Spinner/>:'Add to Cart'}</button>
                        <button  class="flex-1  bg-color2 text-secondary p-2 rounded-full uppercase">Buy it Now</button>
                    </div>
                </div>
            </div>
            <ProductSilder />
        </div>

    );
}

export default ProductPage;