import React from "react";


const Footer = () => {
    return (
        <>
        <div></div><br/><br/>
            <div className="footer ">
                <div className="ondebox">
                    <svg
                        className="onde"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path
                                id="onda"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z"
                            />
                        </defs>
                        <g className="parallaxonde">
                            <use xlinkHref="#onda" x="48" y="0" fill="#faf7f2" />
                            <use xlinkHref="#onda" x="48" y="3" fill="#faf7f2" />
                            <use xlinkHref="#onda" x="48" y="5" fill="#faf5eb" />
                            <use xlinkHref="#onda" x="48" y="7" fill="#faf5eb" />
                            <use xlinkHref="#onda" x="48" y="9" fill="#fcf7ee" />
                            <use xlinkHref="#onda" x="48" y="11" fill="#fcf7ee" />
                        </g>
                    </svg>
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="social col-lg-3 md-40">
                            <div className="titleblock">Our Social</div>
                            <div className="media-block">
                                <ul className="social-media  ">
                                    <li><a><i className="bi bi-facebook"></i></a></li>
                                    <li><a><i className="bi bi-instagram"></i></a></li>
                                    <li><a><i className="bi bi-twitter-x"></i></a></li>
                                    <li><a><i className="bi bi-tiktok"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="logo col-lg-6 mb-md-40">
                            <img src="assect/image/image.webp" alt="logo" />
                            <ul className="page-list">
                                <li><a>ABOUT</a></li>
                                <li><a>PRIVACY POLICY</a></li>
                                <li><a>TERMS OF SERVICES</a></li>
                                <li><a>CONTACT</a></li>
                            </ul>
                            <div>Copyright © 2024 Nova Creative. All Rights Reserved.</div>
                        </div>
                        <div className="payment col-lg-3">
                            <div className="title-payment">Payments Methods</div>
                            <img src="assect/image/payment-footer_800x.webp" alt="payments" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;