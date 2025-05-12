import React from "react";
import { CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
const Products = () => {
    return (
        <>
            <div className="products-section">
                <div className="products-header">
                    <div className="title">
                        <p>PRODUCT'S</p>
                        <p className="product-title">Top Rated Product's</p>
                    </div>
                    <div className="product-grid">
                        <div className="product-card">
                            <div className="discount-badge">-2%</div>
                            <div className="image-wrapper">
                                <img src="assets/image/product(1).webp" alt="Main Image" />
                                <img className="hover-img" src="assets/image/product(1.1).webp" alt="Hover Image" />
                                <div className="icon-overlay">
                                    {/* Wishlist and Quick View Icons */}
                                    <i className="wishlist-icon">
                                        <CiStar />
                                        <span class="btn-tootip">Add To Wishlist</span>
                                    </i>
                                    <i className="quick-view-icon">
                                        <IoEyeOutline />
                                        <span class="btn-tootip">Quick View</span>
                                    </i>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="star-rating">☆☆☆☆☆</div>
                                <h3 className="product-title">Radiant Silk Cleanser</h3>
                                <div className="product-price">
                                    <span>$68.00</span> <del>$70.00</del>
                                </div>
                            </div>
                            <div className="button-group">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="discount-badge">-7%</div>
                            <div class="image-wrapper">
                                <img src="assets/image/product(2).webp"
                                    alt="Main Image" />
                                <img class="hover-img"
                                    src="assets/image/product(2.2).webp"
                                    alt="Hover Image" />
                                <div class="icon-overlay">
                                    <i className="wishlist-icon">
                                        <CiStar />
                                        <span class="btn-tootip">Add To Wishlist</span>
                                    </i>
                                    <i className="quick-view-icon">
                                        <IoEyeOutline />
                                        <span class="btn-tootip">Quick View</span>
                                    </i>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="star-rating">☆☆☆☆☆</div>
                                <h3 class="product-title">Radiant Silk Cleanser</h3>
                                <div class="product-price">
                                    <span>$68.00</span> <del>$70.00</del>
                                </div>
                            </div>
                            <div class="button-group">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="discount-badge">-11%</div>
                            <div class="image-wrapper">
                                <img src="assets/image/product(3).webp"
                                    alt="Main Image" />
                                <img class="hover-img"
                                    src="assets/image/product(3.2).webp"
                                    alt="Hover Image" />
                                <div class="icon-overlay">
                                    <i className="wishlist-icon">
                                        <CiStar />
                                        <span class="btn-tootip">Add To Wishlist</span>
                                    </i>
                                    <i className="quick-view-icon">
                                        <IoEyeOutline />
                                        <span class="btn-tootip">Quick View</span>
                                    </i>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="star-rating">☆☆☆☆☆</div>
                                <h3 class="product-title">Radiant Silk Cleanser</h3>
                                <div class="product-price">
                                    <span>$68.00</span> <del>$70.00</del>
                                </div>
                            </div>
                            <div class="button-group">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        <div class="product-card">
                            <div class="discount-badge">-5%</div>
                            <div class="image-wrapper">
                                <img src="assets/image/product(4).webp"
                                    alt="Main Image" />
                                <img class="hover-img"
                                    src="assets/image/product(4.2).webp"
                                    alt="Hover Image" />
                                <div class="icon-overlay">
                                    <i className="wishlist-icon">
                                        <CiStar />
                                        <span class="btn-tootip">Add To Wishlist</span>
                                    </i>
                                    <i className="quick-view-icon">
                                        <IoEyeOutline />
                                        <span class="btn-tootip">Quick View</span>
                                    </i>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="star-rating">☆☆☆☆☆</div>
                                <h3 class="product-title">Radiant Silk Cleanser</h3>
                                <div class="product-price">
                                    <span>$68.00</span> <del>$70.00</del>
                                </div>
                            </div>
                            <div class="button-group">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;