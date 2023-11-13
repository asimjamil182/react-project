import React from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const CatagorieSection = () => {
    return (
        <div>
            <div className='text-center uppercase text-2xl text-color2 py-4'>Top Catagories</div>
            <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-full md:w-[50%] lg:w-[25%] relative">
                    <img src="https://placehold.co/500X600" alt="" />
                    <button className=" absolute right-12 bottom-12 uppercase rounded-full py-1 px-4 bg-color2 text-secondary shadow">cloths <ArrowRight className=" inline-block mb-1" /></button>
                </div>
                <div className="w-full md:w-[50%] lg:w-[25%] relative">
                    <img src="https://placehold.co/500X600" alt="" className=" brightness-50" />
                    <button className=" absolute right-12 bottom-12 uppercase rounded-full py-1 px-4 bg-color2 text-secondary shadow">Shoes <ArrowRight className=" inline-block mb-1" /></button>
                </div>
                <div className="w-full md:w-[50%] lg:w-[25%] relative">
                    <img src="https://placehold.co/500X600" alt="" />
                    <button className=" absolute right-12 bottom-12 uppercase rounded-full py-1 px-4 bg-color2 text-secondary shadow">Jewlery <ArrowRight className=" inline-block mb-1" /></button>
                </div>
                <div className="w-full md:w-[50%] lg:w-[25%] relative">
                    <img src="https://placehold.co/500X600" alt="" className=" brightness-50" />
                    <button className=" absolute right-12 bottom-12 uppercase rounded-full py-1 px-4 bg-color2 text-secondary shadow">perfums <ArrowRight className=" inline-block mb-1" /></button>
                </div>
            </div>
        </div>
    )
}

export default CatagorieSection;