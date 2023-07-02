import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
    return (
        <div className='col-4'>
            <div className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src='https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.1.1763720918.1685545808&semt=sph' className='w-100  px-3 '
                            alt="Women fashion" />
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>Amazon</h5>
                        <h6 className='title'>Women Fashion , One of the finest cloths brand in the world</h6>
                        <div className="d-flex">
                            <AiFillStar color="#ffd700" size={24}></AiFillStar>
                            <AiFillStar color="#ffd700" size={24}></AiFillStar>
                            <AiFillStar color="#ffd700" size={24}></AiFillStar>
                            <AiFillStar color="#ffd700" size={24}></AiFillStar>
                            <AiOutlineStar color="#000" size={24}></AiOutlineStar>
                        </div>
                        <p className='price'>
                            <span className='red-p'>$200</span>&nbsp; <strike>$100</strike>
                        </p>
                        <div className='discount-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                                <b>5</b>days
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-2 bg-warning'>1</span>:
                                <span className='badge rounded-circle p-2 bg-warning'>1</span>:
                                <span className='badge rounded-circle p-2 bg-warning'>1</span>

                            </div>




                        </div>
                        <div className='prod-count my-3'>
                            <p>Products: 5</p>
                            <div className="progress" >
                                <div className="progress-bar" style={{ "width": "25%" }}
                                    role="progress-bar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <Link className='button'>Add to Cart</Link>





                    </div>

                </div>

            </div>

        </div>
    )
}
export default SpecialProduct;
