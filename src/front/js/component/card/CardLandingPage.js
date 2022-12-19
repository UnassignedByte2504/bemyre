import React from "react";
import { Link } from "react-router-dom";

export const CardLandingPage = () =>{

    return (
        <div className="card m-2 text-black" style={{width: "16rem"}}>
            <img src="https://s1.abcstatics.com/media/cultura/2020/04/21/iggy-U30860708087yTY-620x349@abc.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center">Nombre grupo</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )

}