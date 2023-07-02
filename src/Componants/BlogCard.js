import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-image">
                    <img src="https://img.freepik.com/premium-photo/big-sale-excited-afro-girl-with-shopping-bags-touching-sunglasses-looking-camera-pink-studio-wall_255667-20940.jpg?w=996" className="img-fluid" alt="blog" />

                </div>
                <div className="blog-content">
                    <p className="date">1 Dec,2023</p>
                    <h5 className="title"> A beautiful sunday morning renaissance</h5>
                    <p className="desc">lorem sdn,sznxm nz,xmn mzxnv,zdnklvnklxcm, cm,xn vm,x,mc xm,cnvm,dxc </p>
                    <Link to='/' className="button">Read More</Link>



                </div>



            </div>

        </div>
    );
};
export default BlogCard;
