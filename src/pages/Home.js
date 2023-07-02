import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
import { CiPercent } from 'react-icons/ci';
import { BiSupport } from 'react-icons/bi';
import { BsFillGiftFill } from 'react-icons/bs';
import { GrSecure } from 'react-icons/gr';
import Marquee from "react-fast-marquee";
import BlogCard from '../Componants/BlogCard';
import ProductCard from '../Componants/ProductCard';
import SpecialProduct from '../Componants/SpecialProduct';


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
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='services d-flex align-items-center justify-content-between'>
                                <div className=' d-flex align-items-center gap-15'>
                                    <FaShippingFast size={25}></FaShippingFast>
                                    <div>
                                        <h6><b>Free Shipping</b></h6>
                                        <p className="mb-0 text-secondary">From all Orders over $500</p>
                                    </div>

                                </div>
                                <div className=' d-flex align-items-center gap-15'>
                                    <BsFillGiftFill size={25}></BsFillGiftFill>
                                    <div>
                                        <h6><b>Daily Surprise Offer's</b></h6>
                                        <p className="mb-0 text-secondary">Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center gap-15'>
                                    <BiSupport size={25}></BiSupport>
                                    <div>
                                        <h6><b>Support 24/7</b></h6>
                                        <p className="mb-0 text-secondary">Shop With an Expert</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center gap-15'>
                                    <CiPercent size={25}></CiPercent>
                                    <div>
                                        <h6><b>Affordable Price</b></h6>
                                        <p className="mb-0 text-secondary"> Get Factory direct Price</p>
                                    </div>

                                </div>
                                <div className=' d-flex align-items-center gap-15'>
                                    <GrSecure size={25}></GrSecure>
                                    <div>
                                        <h6><b>Secure Payments</b></h6>
                                        <p className="mb-0 text-secondary"> 100% Protected Payments</p>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>


                </div>

            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex  flex-wrap justify-content-between align-content-center'>

                                <div className='d-flex gap-15 align-items-center'>
                                    <div>
                                        <h6><b>Jackets</b></h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='https://img.freepik.com/premium-psd/jacket-sweatshirt-mockup_1119-2185.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph' alt='Jacket' className='w-25 '></img>
                                </div>

                                <div className='d-flex gap-15 align-items-center'>
                                    <div>
                                        <h6><b>Women's Tops</b></h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='https://img.freepik.com/free-photo/young-stylish-woman-model-casual-summer-green-clothes-brown-hat-with-red-lips-posing-near-white-wall_158538-7352.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph' alt='top' className='w-25 '></img>
                                </div>

                                <div className='d-flex gap-15 align-items-center'>
                                    <div>
                                        <h6><b>Diffrent Saree's</b></h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='https://img.freepik.com/premium-photo/beautiful-indian-young-girl-posing-traditional-indian-saree-white-background_136354-4619.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph' alt='saree' className='w-25 '></img>
                                </div>

                                <div className='d-flex gap-15 align-items-center'>
                                    <div>
                                        <h6><b>Kid's Collection</b></h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='https://img.freepik.com/free-photo/group-beautiful-chlidren-posing_155003-1988.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=ais' alt='kids' className='w-25 '></img>
                                </div>

                                <div className='d-flex gap-15 align-items-center'>
                                    <div>
                                        <h6><b>Beauty Products</b></h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='https://img.freepik.com/premium-photo/set-decorative-cosmetic-powder-lipsticks-brush-blush-eyeshadow-nail-polish-white-background_717472-2959.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais' alt='Beauty Products' className='w-25 '></img>
                                </div>
                                <div className='d-flex gap-15 align-items-center'>
                                    <div>
                                        <h6><b>Men's Jeans</b></h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='https://img.freepik.com/free-photo/full-lenght-portrait-handsome-sexy-man-lying-pose-studio_186202-1615.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=ais' alt='Jeans for men' className='w-25 '></img>
                                </div>
                                <div className='d-flex gap-15 align-items-center'>
                                    <div>
                                        <h6><b>T-shirts</b></h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='https://img.freepik.com/free-photo/blank-black-t-shirt-hanger-isolated-white-space_74952-876.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph' alt='T-shirt' className='w-25 '></img>
                                </div>
                                <div className='d-flex gap-15 align-items-center'>
                                    <div>
                                        <h6><b>Women's Jeans</b></h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='https://img.freepik.com/free-photo/full-length-portrait-cheerful-young-woman-jumping-celebrating-gray-wall_231208-1435.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais' alt='Jeans for Women' className='w-25 '></img>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured-wrapper py-5 home-wrapper-2 '>
                <div className='container-xxl'>

                    <div className='row'>

                        <div className='col-12'>

                            <h3 className='section-heading '>Our Features Collection</h3>

                        </div>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>






                    </div>

                </div>


            </section>
            <section className='famous-wraapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        {/* card 1 */}
                        <div className='col-3 px-2'>
                            <div className='famous-card position-relative'>
                                <img src="https://img.freepik.com/premium-psd/smart-watch-mockup-geometric-scene_23-2149896826.jpg?size=626&ext=jpg&ga=GA1.2.1763720918.1685545808&semt=ais" alt="smart watch" className='img-fluid' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch series 10</h6>
                                    <p>From $300 to $700 for mo.*</p>
                                    <br />
                                </div>


                            </div>

                        </div>
                        {/* card 2 */}
                        <div className='col-3 px-2'>
                            <div className='famous-card position-relative'>
                                <img src="https://img.freepik.com/premium-psd/smart-watch-mockup-geometric-scene_23-2149896826.jpg?size=626&ext=jpg&ga=GA1.2.1763720918.1685545808&semt=ais" alt="smart watch" className='img-fluid' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch series 10</h6>
                                    <p>From $300 to $700 for mo.*</p>
                                </div>


                            </div>

                        </div>
                        {/* card 3 */}
                        <div className='col-3 px-2'>
                            <div className='famous-card position-relative'>
                                <img src="https://img.freepik.com/premium-psd/smart-watch-mockup-geometric-scene_23-2149896826.jpg?size=626&ext=jpg&ga=GA1.2.1763720918.1685545808&semt=ais" alt="smart watch" className='img-fluid' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch series 10</h6>
                                    <p>From $300 to $700 for mo.*</p>
                                </div>


                            </div>

                        </div>
                        {/* card 4 */}
                        <div className='col-3 px-2'>
                            <div className='famous-card position-relative'>
                                <img src="https://img.freepik.com/premium-psd/smart-watch-mockup-geometric-scene_23-2149896826.jpg?size=626&ext=jpg&ga=GA1.2.1763720918.1685545808&semt=ais" alt="smart watch" className='img-fluid' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch series 10</h6>
                                    <p>From $300 to $700 for mo.*</p>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>


            </section>
            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>

                            <h3 className='section-heading '>Special Products</h3>

                        </div>
                        <div className='row'>
                            <SpecialProduct />


                        </div>


                    </div>

                </div>
            </section>
            <section className='marque-wrapper home-wrapper-2  py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper bg-white  shadow-lg  card-wrapper'>
                                <Marquee className='d-flex align-items-center justify-content-center gap-0 flex-column'>
                                    <div>
                                        <img src="https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png" alt="cloth" className='w-25'></img>

                                    </div>

                                    <div>
                                        <img src="https://i.pinimg.com/originals/95/4b/73/954b730a34d452fb04a15999333c558a.png" alt="cloth" className='w-25' ></img>

                                    </div>
                                    <div>
                                        <img src="https://www.loreal.com/-/media/project/loreal/brand-sites/corp/master/lcorp/4-brands/brands-logo/vector-div/acd-en.svg?rev=c0c55eb158db4c028dadc32dc948318c&hash=E6FFEDBF3498303D9B0D8F5BF7465DDD" alt="cloth" className='w-25' ></img>

                                    </div>
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQMd6oV2GwgJhLYsWZkeOedu2CUKCyogjCg&usqp=CAU" alt="cloth" className='w-25' ></img>

                                    </div>
                                    <div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpt2Dn0zLcTxQk8xicsyyIfTBrx5sGaHGUA&usqp=CAU" alt="cloth" className='w-25' ></img>

                                    </div>
                                    <div>
                                        <img src='https://logonoid.com/images/esprit-logo.png' alt="cloth" className='w-25' ></img>

                                    </div>

                                </Marquee>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blog-wrapper py-5 home-wrapper-2 '>
                <div className='container-xxl'>

                    <div className='row'>

                        <div className='col-12'>

                            <h3 className='section-heading '>Our Blogs</h3>

                        </div>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>


                    </div>

                </div>


            </section>
        </div >
    )
}

export default Home;