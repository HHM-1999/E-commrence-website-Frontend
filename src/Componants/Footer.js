import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>

            <footer className="py-4">
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <VscAccount className='text-white mb-0  ' size={35}></VscAccount>
                                <h2 className='mb-0 text-white'>Sign up for News Letter</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className='input-group'>
                                <input
                                    type="text"
                                    className='form-control py-1'
                                    placeholder='your Email Id'
                                    aria-label='your Email Id'
                                    aria-describedby='basic-addon2'

                                ></input>
                                <span className='input-group-text p-2' id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
            <footer className="py-4">
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white mb-4 '>Contact Us</h4>
                            <div>
                                <address className='text-white mb-1 py-2'>Sector- 12. House no : 45, <br></br>
                                    Mascot Plaza, Uttara Model Town ,<br></br>
                                    Dhaka-1230, Bangladesh.

                                </address>
                                <a href='tel: +8801436565656545' className='mt-4 d-block mb-3 text-white'>+8801436565656545</a>
                                <a href='mailto:humairamethela4@gmail.com' className='mt-4 d-block mb-3 text-white'>humairamethela4@gmail.com</a>
                                <div className='d-flex gap-10 align-items-center'>
                                    <a href='/'>
                                        <AiOutlineFacebook className='text-white mb-0  ' size={25}></AiOutlineFacebook>
                                    </a>
                                    <a href='/'>
                                        <BsInstagram className='text-white mb-0  ' size={20}></BsInstagram>
                                    </a>
                                    <a href='/'>
                                        <AiOutlineLinkedin className='text-white mb-0  ' size={25}></AiOutlineLinkedin>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4 '>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1'>Shipping</Link>
                                <Link className='text-white py-2 mb-1'>Terms and Conditions</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>




                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4 '>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>FAQ</Link>
                                <Link className='text-white py-2 mb-1'>Contact Us</Link>




                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white mb-4 '>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Men</Link>
                                <Link className='text-white py-2 mb-1'>Women</Link>
                                <Link className='text-white py-2 mb-1'>Kids</Link>
                                <Link className='text-white py-2 mb-1'>Home & Beauty</Link>
                                <Link className='text-white py-2 mb-1'>Beauty</Link>



                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()}; Developed by Humaira Hossain</p>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer;