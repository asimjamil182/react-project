import React, { useState, useEffect } from "react";
import { ArrowRight, CaretDown, CaretUp, Cart, Envelope, Facebook, Gear, Heart, HouseDoor, InfoCircle, Instagram, List, Mailbox, MenuButton, PersonCircle, Phone, Search, Telephone, Tiktok, X, XLg } from "react-bootstrap-icons";
import SearchBar from "./SearchBar";
import Api from "../api/Api";
import MegaMenu from "./MegaMenu";
import Overlay from "./Overlay";
import { useNavigate } from "react-router-dom";
import { Contact } from "../modals/Frontend_Api";


const TopNav = () => {

    const navigate = useNavigate();
    const [nav, setnav] = useState(false);
    const [searchbar, setsearchbar] = useState(false);
    const [d1, setd1] = useState(false);
    const [d2, setd2] = useState(false);
    const [overlay, setoverlay] = useState(false);
    const [megaMenu, setmegaMenu] = useState(false);

    const [contact_detail, setcontact] = useState({
        id: 1,
        phoneno: "+971834738473",
        email: "username@gmail.com",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/"
    });

    const navhandler = () => {
        setnav(!nav)
        setoverlay(!nav)
        if (searchbar) {
            setsearchbar(false);
        }
    }
    const searchhandler = () => {
        setsearchbar(!searchbar)
        if (nav) {
            setnav(false);
        }
    }
    const dropdownhandler = () => {
        setd1(!d1);

    }
    const dropdownhandler2 = () => {
        setd2(!d2);
        setoverlay(!d2);
    }

    const megaMenuHandler = () => {
        setmegaMenu(!megaMenu);
        setoverlay(!megaMenu);
    }

    const overlayClicked = () => {
        setd2(false);
        setmegaMenu(false);
        setnav(false);
        setoverlay(false);
    }

    useEffect(() => {
        const getContactDetail = async () => {
            const contactdetail = await Contact();
            if (contactdetail) {
                setcontact(contactdetail[0]);
            }
        }
        getContactDetail();
    }, []);

    function inputfocus(foucs) {
        console.log(foucs);
    }

    function navControl(url) {
        navigate(url);
        setnav(false);
        setoverlay(false);
    }
    const menuitems = [
        {
            title: "Home",
            url: "/home",
            megamenu: {

            }
        }
    ]

    return (
        <header className=" bg-secondary shadow-sm text-primary font-Roboto flex-grow-[1]">
            <Overlay show={overlay} overlayClicked={overlayClicked} />
            <div class="w-full bg-color2 text-secondary py-2 hidden md:block">
                <div class="flex px-4 lg:w-[70%] lg:m-auto lg:p-0">
                    <div class="flex-1 flex justify-start items-center">
                        <div class="pr-5"><a target="_blank" class="flex items-center">
                            <i class="bi-telephone text-secondary"></i> <span class="pl-2"><a href={`tel:${contact_detail.phoneno}`} target="_blank">{contact_detail.phoneno}</a></span>
                        </a></div>
                        <div class="pr-5"><a target="_blank" class="flex items-center">
                            <i class="bi-envelope text-secondary"></i><span class="pl-2"><a href={`mailto:${contact_detail.email}`} target="_blank">{contact_detail.email}</a></span>
                        </a></div>
                    </div>
                    <div class="flex-1 flex justify-end items-center">
                        <div class="pl-5"><a target="blank" href={contact_detail.facebook}>
                            <Facebook />
                        </a></div>
                        <div class="pl-5"><a target="blank" href={contact_detail.instagram}>
                            <Instagram />
                        </a></div>
                        <div class="pl-5"><a target="blank" href={contact_detail.tiktok}>
                            <Tiktok />
                        </a></div>
                    </div>

                </div>
            </div>
            <div className="text-white flex px-4 items-center flex-wrap  py-4 lg:px-0 w-full lg:w-[70%] lg:flex-nowrap lg:m-auto justify-between border-b border-lightgray">
                <div className="w-[50%] md:w-[30%] flex items-center">
                    <div className="font-semibold"><span>{nav ? <X onClick={navhandler} className="md:hidden fill-primary inline-block" size={20} /> : <List onClick={navhandler} className="md:hidden fill-primary inline-block" size={20} />}</span><span className="text-color2">Brand</span> Logo</div>
                </div>
                <div className="w-full md:w-[40%] px-2 order-1 md:order-[0] hidden md:flex">
                    <SearchBar />
                </div>
                {searchbar ? <div className="w-full md:w-[40%] px-2 order-1 md:order-[0] md:hidden">
                    <SearchBar />
                </div> : ''}
                <div className="w-[50%] md:w-[30%]  self-end flex justify-end items-center static">
                    <div><Heart className="pl-3 hover:fill-color2 cursor-pointer hidden md:block" size={29} /></div>
                    <div><Cart className="pl-3 hover:fill-color2 cursor-pointer hidden md:block" size={29} /></div>
                    <div>{searchbar ? <XLg onClick={searchhandler} className="pl-3 cursor-pointer md:hidden" size={29} /> : <Search onClick={searchhandler} className="pl-3 hover:fill-color2 cursor-pointer md:hidden" size={29} />}</div>
                    <div className="relative" style={d2 ? { zIndex: "2" } : { zIndex: "0" }} onClick={dropdownhandler2}>
                        <PersonCircle className="pl-3 hover:fill-color2 cursor-pointer" size={29} />
                        <ul className={d2 ? 'bg-seondary shadow-md absolute right-0 bg-secondary' : 'hidden'}>
                            <li id="userDropdown" className=" p-1 px-3 text-sm hover:bg-color2 hover:text-secondary cursor-pointer">Order</li>
                            <li id="userDropdown" className=" p-1 px-3 text-sm hover:bg-color2 hover:text-secondary cursor-pointer">Setting</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex justify-center static">
                <ul class="w-full md:w-[70%] lg:w-[50%] px-2 flex bg-secondary font-semibold uppercase text-sm py-2 z-[2]" style={megaMenu ? { zIndex: "2" } : { zIndex: "0" }}>
                    <div class="flex-1 px-2 text-center">
                        <span class="hover:text-color2 cursor-pointer" onClick={() => { navigate('/') }}>Home</span>
                    </div>
                    <div class="flex-1 px-2 text-center" onClick={megaMenuHandler}>
                        <span class="hover:text-color2 cursor-pointer">Catagories {megaMenu ? <CaretUp className=" inline-block" /> : <CaretDown className=" inline-block" />}</span>
                        <MegaMenu show={megaMenu ? true : false} />
                    </div>
                    <div class="flex-1 px-2 text-center">
                        <span class="hover:text-color2 cursor-pointer">Men</span>
                    </div>
                    <div class="flex-1 px-2 text-center">
                        <span class="hover:text-color2 cursor-pointer">Women's</span>
                    </div>
                    <div class="flex-1 px-2 text-center">
                        <span class="hover:text-color2 cursor-pointer">Jewelery</span>
                    </div>
                    <div class="flex-1 px-2 text-center">
                        <span class="hover:text-color2 cursor-pointer">Perfume</span>
                    </div>
                    <div class="flex-1 px-2 text-center">
                        <span class="hover:text-color2 cursor-pointer">Blog</span>
                    </div>
                    <div class="flex-1 px-2 text-center">
                        <span class="hover:text-color2 cursor-pointer">Hot offers</span>
                    </div>
                </ul>
            </div>
            <div className={nav ? 'fixed shadow-sm left-0 top-14 bottom-0 w-[60%] py-5 px-4  overflow-y-auto md:hidden ease-in-out duration-500 bg-secondary z-[1]' : 'md:hidden hidden'}>
                <ul className=" relative h-full">
                    <li className="p-2 hover:bg-color2 hover:text-secondary" onClick={() => navControl("/")}>Home</li>
                    <li className="p-2 hover:bg-color2 hover:text-secondary">
                        <a onClick={dropdownhandler}>Collection <span>{d1 ? <CaretUp className=" inline-block float-right mt-1" /> : <CaretDown className=" inline-block float-right mt-1" />}</span></a>
                        <ul className={d1 ? 'pl-3 bg-secondary' : 'hidden'}>
                            <li className="text-color2 p-1 hover:opacity-80">Summer</li>
                            <li className="text-color2 p-1 hover:opacity-80">Winter</li>
                        </ul>
                    </li>
                    <li className="p-2 hover:bg-color2 hover:text-secondary">
                        <a href="#">Men</a>
                        <MegaMenu />
                    </li>
                    <li className="p-2 hover:bg-color2 hover:text-secondary"><a href="#">Women</a></li>
                    <li className="p-2 hover:bg-color2 hover:text-secondary"><a href="#">Kids</a></li>
                </ul>
            </div>
        </header>
    );
}

export default TopNav;