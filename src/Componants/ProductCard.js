import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar, AiFillEye, AiOutlineHeart } from 'react-icons/ai'
import { IoGitCompareOutline } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri'
const ProductCard = () => {
    // const { grid } = props;
    // console.log(grid);
    // let location = useLocation();

    return (
        <>
            <div className="col-3">

                <div className="product-card  ">
                    <Link

                        className="product-card  position-relative"
                    >
                        <div className="wishlist-icon position-absolute">
                            <button className="border-0 bg-transparent">
                                <AiOutlineHeart></AiOutlineHeart>
                            </button>
                        </div>
                        <div className="product-image">
                            <img src='https://img.freepik.com/free-photo/shirt_1203-8194.jpg?size=626&ext=jpg&ga=GA1.2.1763720918.1685545808&semt=ais' className="img-fluid" alt=" man clothes" />
                            <img src='https://img.freepik.com/free-photo/portrait-young-pensive-lady-standing-t-shirt-jeans-thoughtfully-looking-camera-white-background-isolated_574295-1266.jpg?size=626&ext=jpg&ga=GA1.1.1763720918.1685545808&semt=ais' className="img-fluid" alt="Women clothes" />
                        </div>
                        <div className="product-details">
                            <h6 className="brand">Amazon</h6>
                            <h5>Best product with best qualities Clothes</h5>
                            {/* <StarRatingComponent
                            starColor={5} onStarHover='#ffd700'
                            value={3}


                        ></StarRatingComponent> */}
                            <div className="d-flex">
                                <AiFillStar color="#ffd700" size={24}></AiFillStar>
                                <AiFillStar color="#ffd700" size={24}></AiFillStar>
                                <AiFillStar color="#ffd700" size={24}></AiFillStar>
                                <AiFillStar color="#ffd700" size={24}></AiFillStar>
                                <AiOutlineStar color="#000" size={24}></AiOutlineStar>
                            </div>

                            <p className="price">$100.00</p>

                        </div>
                        <div className="action-bar position-absolute ">
                            <div className="d-flex flex-column gap-15">
                                <Link className="border-0 ">
                                    <IoGitCompareOutline></IoGitCompareOutline>
                                </Link>
                                <Link className="border-0 ">
                                    <AiFillEye></AiFillEye>
                                </Link>
                                <Link className="border-0 ">
                                    <RiShoppingCartLine></RiShoppingCartLine>
                                </Link>

                            </div>

                        </div>

                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductCard;