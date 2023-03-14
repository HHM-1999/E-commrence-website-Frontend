import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6 '>
                            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                <div className="carousel-inner">
                                    <div className="carousel-item active main-banner  position-relative">

                                        <img src='https://img.freepik.com/premium-photo/happy-beautiful-young-woman-blue-dress-with-his-hand-holding-shopping-bags-finger-pointing-light-blue-with-copy-space_74952-576.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=sph' alt='' className='img-fluid rounded-3 w-100  '></img>
                                        <div className='main-banner-content position-absolute px-4 mx-2'>

                                            <h4><b>SUPER BRANDED JUST FOR YOU</b> </h4>
                                            <h5><b>Awesome Sale</b></h5>
                                            <p>Check Out This Offer </p>
                                            <p>from $999.99 or $41.62  </p>
                                            <Link className='button '><b>GET HERE</b></Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item main-banner  position-relative">

                                        <img src='   https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=ais
' alt='' className='img-fluid rounded-3 w-100   '></img>
                                        <div className='main-banner-content position-absolute  '>

                                            <h4><b>Amazing Collections For You</b> </h4>
                                            <h5><b>Great Opportunity  </b></h5>
                                            <h5><b>50% Discount  </b></h5>
                                            <br></br>
                                            <p> Upto $600.50 Order  </p>
                                            <Link className='button '><b>BUY NOW</b></Link>
                                        </div>
                                    </div>

                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center position-relative '>

                                <div className='small-banner  position-relative  '>
                                    <img src='https://img.freepik.com/free-photo/discount-shopping-season-with-sale_23-2150165902.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=sph ' alt='' className='img-fluid rounded-3 shadow-lg'></img>
                                    <div className='small-banner-content position-absolute px-1 mx-1  mt-2'>
                                        <h5><b>Men's Collection</b></h5>
                                        <h4><b className="text-danger">BEST SALE</b> </h4>
                                        <p>Buy from $999.99 or $41.62  </p>

                                    </div>

                                </div>



                                <div className='small-banner  position-relative  '>
                                    <img src='https://img.freepik.com/free-photo/young-japanese-woman-portrait-copy-space_23-2148870795.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais' alt='' className='img-fluid rounded-3 shadow-lg '></img>
                                    <div className='small-banner-content position-absolute px-1 mx-1  mt-2'>
                                        <h5><b>Women's Collection</b></h5>
                                        <h4><b className="text-danger" >BEST SALE</b> </h4>
                                        <p>Buy from $999.99 or $41.62  </p>

                                    </div>

                                </div>


                                <div className='small-banner  position-relative  '>
                                    <img src='https://img.freepik.com/free-photo/beauty-bag-with-different-cosmetics-white-table_23-2148047052.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais ' alt='' className='img-fluid rounded-3 shadow-lg '></img>
                                    <div className='small-banner-content position-absolute px-1 mx-1  mt-2'>
                                        <h5><b>Beauty Products</b></h5>
                                        <h4><b className="text-danger">NEW ARRIVAL</b> </h4>
                                        <p>Buy from $999.99 or $41.62  </p>

                                    </div>

                                </div>


                                <div className='small-banner  position-relative  '>
                                    <img src="https://img.freepik.com/free-psd/close-up-kid-expression-portrait_23-2150193024.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph" alt='' className='img-fluid rounded-3 shadow-lg '></img>
                                    <div className='small-banner-content position-absolute px-1 mx-1  mt-2'>
                                        <h5><b>Kid's Collection</b></h5>
                                        <h4><b className="text-danger">BEST SALE</b> </h4>
                                        <p>Buy from $999.99 or $41.62  </p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </div >
    )
}

export default Home;