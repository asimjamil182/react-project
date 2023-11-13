import React from "react";

const Footer=()=>{
    return(
        <footer className="mt-4 flex-grow-[1]">
        <div className="footer border-t border-lightgray ">
            <div className="w-full lg:w-[70%] lg:m-auto  lg:px-4">
                <div className="flex py-8 flex-wrap lg:flex-nowrap px-4 lg:px-0">
                    <div className="w-full lg:flex-1">
                        <img src="https://placehold.co/100X100" alt="" />
                        <div className=" grid grid-flow-col gap-4 w-4 py-3 items-center justify-between">
                            <i className="bi-facebook text-color2"></i>
                            <i className="bi-youtube text-color2"></i>
                            <i className="bi-instagram text-color2"></i>
                            <i className="bi-twitter text-color2"></i>
                            <i className="bi-tiktok text-color2"></i>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1">
                        <div className="border-b text-color2 font-semibold w-6 uppercase">Menu</div>
                        <ul className="text-primary uppercase font-semibold text-[12px]">
                            <li>Home</li>
                            <li>Collection</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                        </ul>
                    </div>
                    <div className="w-full lg:flex-1">
                        <div className="border-b text-color2 font-semibold w-6 uppercase">Account</div>
                        <ul className="text-primary uppercase font-semibold text-[13px]">
                            <li>Login</li>
                            <li>order</li>
                            <li>Whishlist</li>

                        </ul>
                    </div>
                    <div className="w-full lg:flex-1">
                        <h1 className=" text-color2 text-xl py-2">Subscribe for Newslater</h1>
                        <div className="border border-lightgray rounded-full overflow-hidden lg:w-[70%]">
                            <input type="email" name="" placeholder="Email" className="p-1 px-3 w-full focus:outline-none"
                                id="" />
                        </div>

                        <button className=" text-secondary bg-color2 rounded-full p-1 px-3 mt-3">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className=" bg-color2">
                <p className=" text-center text-secondary py-6">Powerd by Gipsyfare</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;