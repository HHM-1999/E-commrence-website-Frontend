import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { CiShoppingTag } from 'react-icons/ci';
import { FcManager } from 'react-icons/fc';


const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Enjoy Free Shipping and Return over $200 </p>
                        </div>

                        <div className='col-6'>
                            <p className='text-end text-white mb-0' >Contact Us : <a className='text-white' href="tel: +8802546545">+8802546545</a></p>
                        </div>

                    </div>

                </div>

            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h3>
                                <Link className='text-white'> <b>Cool Outfit</b></Link>
                            </h3>
                        </div>
                        <div className='col-5'>
                            <div className="input-group m-3">
                                <input type="text" className="form-control py-2 " placeholder="Search Outfit.in" />
                                <span className="input-group-text" id="basic-addon2"><FiSearch className='fs.4'></FiSearch></span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>

                                <div className='d-flex align-items-center'>
                                    <Link className='d-flex align-items-center gap-10 gap-15 text-info' >
                                        <h1>♲</h1>
                                        <p className='text-warning mb-0'>Compare<br /> Products</p>


                                    </Link>
                                </div>

                                <div>
                                    <Link className='d-flex align-items-center gap-10 gap-15 text-warning'>
                                        <h1>🤍 </h1>
                                        <p className='text-warning mb-0'>Favorite<br /> Wishlist</p>


                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 gap-15 text-warning' >
                                        <h1><FcManager></FcManager></h1>
                                        <p className='text-warning mb-0'>Login <br /> My Account</p>


                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 gap-15 text-white'>
                                        <h1>🛒</h1>
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$ 500</p>

                                        </div>


                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle
                                        bg-transparent border-0 gap-15 d-flex align-items-center                                       " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span><CiShoppingTag></CiShoppingTag></span> Shop Categories
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to='/'>Home</NavLink>
                                        <NavLink to='/'>Our Store</NavLink>
                                        <NavLink to='/'>Blog</NavLink>
                                        <NavLink to='contact'>Contact</NavLink>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>



            </header>
        </>
    )
}

export default Header;