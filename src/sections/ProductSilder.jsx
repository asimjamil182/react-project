import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Circle, CircleFill } from 'react-bootstrap-icons';
import Space from '../components/Space';
import ProductCard from '../components/ProductCard';
import Api from '../api/Api';




const ProductSilder = () => {
    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5 },
    };

    const [products, setproducts] = useState([]);

    const items  = products.map((product) =>
        <ProductCard product={product}/>
    );

    const renderDotsItem = ({ isActive }) => {
        return isActive ? <CircleFill className=' fill-color2 p-1' size={17} /> : <Circle className=' fill-color2 p-1' size={17} />;
    };

    const retriveProduct = async () => {
        const response = await Api.get("/products");
        return response.data;
    }

    useEffect(() => {
        const productdata = async () => {
            const pro = await retriveProduct();
            setproducts(pro);
        }
        productdata();
    }, []);

    return (
        <div>
            <Space />
            <div className='text-center uppercase text-2xl text-color2 py-4'>Featured Products</div>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                disableButtonsControls
                controlsStrategy={"default"}
                renderDotsItem={renderDotsItem}
            />
        </div>
    )
}

export default ProductSilder;