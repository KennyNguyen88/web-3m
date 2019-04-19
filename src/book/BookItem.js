import React from 'react';
import iphone from "../assets/images/cau-chuyen-iphone.png";
import sevenHabit from "../assets/images/seven-habits.jpg";
import codeComplete from "../assets/images/code-complete.jpg";
import hopeItWork from "../assets/images/hope-it-work.jpg";

const BookItem = ({author,name,id}) => {

    return (
        <div className="col-2 pb-5">
            <div className="card book ">
                {getCoverImage(id)}
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{author}</p>
                </div>
            </div>
        </div>
    )
};

const getCoverImage = (id) => {

    switch (id) {
        case "1000000001":
            return <img src={iphone} className="card-img-top"/>;
        case "1000000002":
            return <img src={sevenHabit} className="card-img-top"/>;
        case "1000000003":
            return <img src={codeComplete} className="card-img-top"/>;
        default:
            return <img src={hopeItWork} className="card-img-top"/>
    }
};

export default BookItem;

