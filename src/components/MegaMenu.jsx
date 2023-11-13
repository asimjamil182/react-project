import React from "react";
import { ArrowRight } from "react-bootstrap-icons";

const MegaMenu = (props) => {
    console.log();
    return (
        <div className={props.show?'megaMenu bg-secondary shadow-md absolute left-0 right-0':'hidden'}>
            {/* <div className="hidden md:block border-t border-lightgray mt-3 w-full"></div> */}
            <div className="w-full lg:w-[70%] lg:m-auto text-left px-4 lg:px-0 py-4">
                <div className="flex flex-wrap md:flex-nowrap py-4 items-start justify-between max-h-[15%]">
                    <div className="w-full md:w-[25%] pr-4 text-[13px]">
                        <div className="text-color2 border-b border-lightgray pb-1">Catagories</div>
                        <ul className="text-md text-[13px] pt-1">
                            <li className="hover:text-color2 cursor-pointer">Cloth</li>
                            <li className="hover:text-color2 cursor-pointer">Shoes</li>
                            <li className="hover:text-color2 cursor-pointer">Jackets</li>
                            <li className="hover:text-color2 cursor-pointer">Shorts</li>
                            <li className="hover:text-color2 cursor-pointer">Jewlery</li>
                            <li className="hover:text-color2 cursor-pointer">Bag</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[75%] py-2 md:p-0">
                        <div className="flex justify-between items-start w-full overflow-x-auto">
                            <div className="flex-none md:flex-1 w-2/3 md:w-[30%] pr-3 md:pr-0">
                                <img src="https://placehold.co/300" alt="" />
                            </div>
                            <div className="flex-none md:flex-1 w-2/3 md:w-[30%] pr-3 md:pr-0">
                                <img src="https://placehold.co/300" alt="" />
                            </div>
                            <div className="flex-none md:flex-1 w-2/3 md:w-[30%] pr-3 md:pr-0">
                                <img src="https://placehold.co/300" alt="" />
                            </div>
                        </div>
                        <div className="border-b border-lightgray py-2"></div>
                        <a href="#" className=" float-right py-3 text-color2">View all <ArrowRight className=" inline-block" size={20} /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaMenu;