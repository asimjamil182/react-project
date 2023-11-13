import React, { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import Api from "../api/Api";
import { useNavigate } from "react-router-dom";
import Overlay from "./Overlay";
import { All_Product } from "../modals/Frontend_Api";

const SearchBar = (props) => {
    const navigate = useNavigate();
    const [product, setproduct] = useState([]);
    const [searchlist, setsearchlist] = useState([]);
    const [searchfocus, setserarcfocus] = useState(false);

    useEffect(() => {
        const productdata = async () => {
            const products = await All_Product();
            if (products) setproduct(products);
        }
        productdata();
    }, [searchfocus]);


    const productSearchHandle = (event) => {
        if (event.target.value == "") {
            setserarcfocus(false);
        } else {
            setserarcfocus(true);
            const searchList = product.filter(product => product.name === event.target.value);
            setsearchlist(searchList);
            console.log(searchlist);
        }
    }

    function overlayClicked() {
        setserarcfocus(!searchfocus);
    }
    return (
        <>
            <Overlay show={searchfocus} overlayClicked={overlayClicked} />
            <div className='mt-2 md:m-0 w-full relative' style={searchfocus ? { zIndex: "3" } : { zIndex: "0" }}>
                <div className="flex border border-lightgray rounded-full overflow-hidden w-full">
                    <input onChange={productSearchHandle} onFocus={() => setserarcfocus(true)} type="text" className="w-full p-1 px-3 placeholder:font-light focus:outline-none font-normal" placeholder="search..." name="" id="" />
                    <button className="bg-color2 text-secondary px-3"><span className="hidden md:block">Search</span><Search className="md:hidden fill-secondary" /></button>
                </div>
                <div id="searchDropdown" className={searchfocus ? 'absolute bg-secondary text-primary w-full shadow-md overflow-hidden rounded-3xl rounded-bl-xl rounded-br-xl' : 'hidden'}>
                    <ul className="">
                        {
                            product.map((product) =>
                                <li onClick={() => { navigate(`/product/${product.id}`); setserarcfocus(false) }} className=" border-b border-[#d8d8d8] p-2 hover:bg-color2 hover:text-secondary cursor-pointer">
                                    <ul className=" flex items-center">
                                        <li className=" w-[10%]">
                                            <img src={product.product_img!=""?product.product_img:"https://placehold.co/300"} alt="" className=" w-[40px] h-[40px]" />
                                        </li>
                                        <li className=" w-[90%]">
                                            {product.product_name}
                                        </li>
                                    </ul>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchBar;