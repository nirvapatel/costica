import React, { useState } from "react";
import { AiOutlineTikTok } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoIosStarOutline, IoLogoInstagram } from "react-icons/io";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollectionsPanelActive, setIsCollectionsPanelActive] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setIsCollectionsPanelActive(false);
    };

    const openCollectionsPanel = () => {
        setIsCollectionsPanelActive(true);
    };

    const backToMainPanel = () => {
        setIsCollectionsPanelActive(false);
    };

    return (
        <>
            <header className="header">
                <div className="menu-toggle" onClick={toggleSidebar}>
                    <i className="bi bi-list"></i>
                    <i className="bi bi-search"></i>
                </div>
                <div className="logo">
                    <img src="assets/image/image.webp" alt="logo-1_400x" />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center h-full">
                    <div className="menu-overlay" />
                    <nav className="menu">
                        <ul className="menu-main">
                            <li>
                                <a href="#" className="font-[600]">Home</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Collections</a><GoChevronDown  className="down-arrow"/>
                                <div className="sub-menu mega-menu mega-menu-column-4">
                                    <div className="list-item">
                                        <h4 className="title">Product Types</h4>
                                        <ul>
                                            <li><a href="#">best sellers</a></li>
                                            <li><a href="#">new Arrivals</a></li>
                                            <li><a href="#">top trending</a></li>
                                            <li><a href="#">top trending</a></li>
                                            <li><a href="#">denim collection</a></li>
                                        </ul>
                                    </div>
                                    <div className="list-item">
                                        <h4 className="title">collection page</h4>
                                        <ul>
                                            <li><a href="#">collection left sidebar</a></li>
                                            <li><a href="#">collection right sidebar</a></li>
                                            <li><a href="#">collection top sidebar</a></li>
                                            <li><a href="#">collection without sidebar</a></li>
                                            <li><a href="#">collection deals</a></li>
                                        </ul>
                                    </div>
                                    <div className="list-item">
                                        <h4 className="title">collection page</h4>
                                        <ul>
                                            <li><a href="#">collection canvas on left</a></li>
                                            <li><a href="#">collection canvas on right</a></li>
                                            <li><a href="#">collection canvas on bottom</a></li>
                                            <li><a href="#">collection full width</a></li>

                                        </ul>
                                    </div>
                                    <div className="list-item">
                                        <h4 className="title">collection page</h4>
                                        <ul>
                                            <li><a href="#">numbered pagination</a></li>
                                            <li><a href="#">load more button</a></li>
                                            <li><a href="#">infinity scroll load more</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Products</a><GoChevronDown  className="down-arrow"/>
                                <div className="sub-menu mega-menu mega-menu-column-4">
                                    <div className="list-item">
                                        <h4 className="title">Product detail</h4>
                                        <ul>
                                            <li><a href="#">Product detail default</a></li>
                                            <li><a href="#">Product detail thumb left 1</a></li>
                                            <li><a href="#">Product detail thumb left 2</a></li>
                                            <li><a href="#">Product detail thumb right</a></li>
                                            <li><a href="#">Product deals coundown</a></li>
                                            <li><a href="#">Product detail tab accordion v1</a></li>
                                            <li><a href="#">Product detail tab accordion v2</a></li>
                                        </ul>
                                    </div>
                                    <div className="list-item">
                                        <h4 className="title">Product detail</h4>
                                        <ul>
                                            <li><a href="#">Product detail thumb grid 1</a></li>
                                            <li><a href="#">Product detail thumb grid 2</a></li>
                                            <li><a href="#">Product detail image grid</a></li>
                                            <li><a href="#">Product detail image scroll</a></li>
                                            <li><a href="#">Product detail image slider 1</a></li>
                                            <li><a href="#">Product detail image slider 2</a></li>
                                            <li><a href="#">Product 3d. ar models</a></li>
                                        </ul>
                                    </div>
                                    <div className="list-item">
                                        <h4 className="title">Product Features</h4>
                                        <ul>
                                            <li><a href="#">product video</a></li>
                                            <li><a href="#">product pre-order</a></li>
                                            <li><a href="#">product variant dropbox style</a></li>
                                            <li><a href="#">product variant image swatch</a></li>
                                            <li><a href="#">product variant pattern</a></li>
                                            <li><a href="#">Product sticky add to cart</a></li>
                                        </ul>
                                    </div>
                                    <div className="list-item">
                                        <h4 className="title">Featured Product</h4>
                                        <div className="offer">
                                            <img src="assets/image/Rectangle_6_380x.jpg" alt="Lipstick" />
                                            <span className="semple">Exclusive Lipstick</span>
                                            <div className="price">$99.99</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Pages</a><GoChevronDown  className="down-arrow"/>
                                <div className="sub-menu single-column-menu">
                                    <ul>
                                        <li><a href="#">404 error</a></li>
                                        <li><a href="#">Faqs page</a></li>
                                        <li><a href="#">about us</a></li>
                                        <li><a href="#">contact us</a></li>
                                        <li><a href="#">store direction page</a></li>
                                        <li><a href="#">store location page</a></li>
                                        <li><a href="#">testimonials page</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Blog</a><GoChevronDown  className="down-arrow"/>
                                <div className="sub-menu single-column-menu">
                                    <ul>
                                        <li><a href="#">blog left sidebar</a></li>
                                        <li><a href="#">blog right sidebar</a></li>
                                        <li><a href="#">blog without sidebar</a></li>
                                        <li><a href="#">blog list view</a></li>
                                        <li><a href="#">blog column view</a></li>
                                        <li><a href="#">blog detail left sidebar</a></li>
                                        <li><a href="#">blog detail right sidebar</a></li>
                                        <li><a href="#">blog detail without sidebar</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="icons">
                    <i className="bi bi-search"></i>
                    <i className="bi bi-person"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-bag "></i>
                </div>
                <div className="item-right">
                    <a href="#" className="menu-toggle">
                        <i className="bi bi-bag"></i>
                    </a>
                </div>
            </header>

            {/* Sidebar Overlay */}
            <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
            <div className={`mobile-menu ${isSidebarOpen ? 'active' : ''}`}>
                <div className={`panel ${isCollectionsPanelActive ? '' : 'active'}`} id="mainPanel">
                    <div className="search-box">
                        <input type="text" placeholder="Enter your keywords" />
                        <button><i className="bi bi-search"></i><CiSearch /></button>
                    </div>
                    <ul>
                        <li>Home <i className="bi bi-chevron-right"></i></li>
                        <li onClick={openCollectionsPanel}>Collections <i className="bi bi-chevron-right"></i></li>
                        <li onClick={openCollectionsPanel}>Product <i className="bi bi-chevron-right"></i></li>
                        <li onClick={openCollectionsPanel}> Pages<i className="bi bi-chevron-right"></i></li>
                        <li onClick={openCollectionsPanel}> Blog<i className="bi bi-chevron-right"></i></li>
                    </ul>
                    <div className="footer-info">
                        <p><strong>Call Us:</strong> +123-456-789</p>
                        <p><strong>Email:</strong> info@example.com</p>
                        <div className="social-icons">
                            <a href="#"><i className="bi bi-facebook"></i><TiSocialFacebook /></a>
                            <a href="#"><i className="bi bi-instagram"></i><IoLogoInstagram /></a>
                            <a href="#"><i className="bi bi-x"></i><RiTwitterXFill /></a>
                            <a href="#"><i className="bi bi-tiktok"></i><AiOutlineTikTok /></a>
                        </div>
                    </div>
                </div>
                <div className={`panel ${isCollectionsPanelActive ? 'active' : ''}`} id="collectionsPanel">
                    <div className="search-box">
                        <input type="text" placeholder="Search collections..." />
                        <button><i className="bi bi-search"></i><CiSearch /></button>
                    </div>
                    <div className="panel-header">
                        <h4>Collections</h4>
                        <div className="back" onClick={backToMainPanel}><i className="bi bi-arrow-left"></i></div>
                    </div>
                    <ul>
                        <li>Product Types <i className="bi bi-chevron-right"></i></li>
                        <li>Collection page <i className="bi bi-chevron-right"></i></li>
                        {/* More submenu items */}
                    </ul>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="bottom-nav">
                <div><i className="bi bi-house-door"></i><span>Home</span></div>
                <div><i className="bi bi-grid"></i><span>Shopping</span></div>
                <div><i className="bi bi-heart"></i><span>Wishlist</span></div>
                <div><i className="bi bi-person"></i><span>Account</span></div>
            </div>
        </>
    );
};

export default Header;
