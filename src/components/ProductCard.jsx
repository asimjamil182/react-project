import { Eye, Heart } from "react-bootstrap-icons";
import StarRating from "./StarRating";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Api from "../api/Api";
import img from  "../images/dress.png";

console.log(img);
const ProductCard = (props) => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [product, setproduct] = useState({
        id: 0,
        product_name: "Product Name",
        product_costprice: 4250,
        product_saleprice: 4300,
        pooduct_rating: 4,
        product_img: ""
    });
    useEffect(() => {
        if (props.product) {
            setproduct(props.product);
        }
    }, [props.product]);

    async function addtocard() {
        setloading(true);
        const response = await Api.post(`/cart`, { product_id: product.id });
        if (response.statusText == 'Created') {
            setInterval(() => {
                setloading(false);
            }, 2000);
        } else {
            setInterval(() => {
                setloading(false);
            }, 2000);
        }
    }
    return (
        <div className="product-card relative bg-secondary rounded-md overflow-hidden shadow m-2">
            <img src={product.product_img!=""?product.product_img:"https://placehold.co/300"} className="w-full select-none max-h-[250px]" alt="" />
            <Heart className=" absolute top-4 right-4 cursor-pointer fill-color2" />
            <Eye onClick={() => navigate(`/product/${product.id}`)} className=" absolute right-4 cursor-pointer fill-secondary bg-color2 rounded-full p-2 -mt-4" size={32} />
            <div className="p-1 pt-3 lg:select-none">
                <div className="pt-2 uppercase text-primary text-ellipsis text-sm overflow-hidden whitespace-nowrap" title={product.product_name}>{product.product_name}</div>
                <div className="pt-2"><StarRating rating={product.pooduct_rating} /></div>
                <div className="text-color2 pt-2 text-xl"><span>AED</span> {product.product_saleprice}</div>
                <button onClick={addtocard} className="mt-1 uppercase rounded-full bg-color2 text-secondary py-2 px-2 font-semibold text-[13px] w-full mb-1">{loading ? <Spinner Color="secondary" /> : 'Add to cart'}</button>
            </div>
        </div>
    )
}

export default ProductCard;