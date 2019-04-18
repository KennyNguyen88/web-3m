import React from 'react';

const HistoryItem = (
    {
        bookTitle,
        bookAuthor,
        userName,
        userEmail,
        userPhone,
        borrowingDate,
        returnDate
    }
) => {

    return (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-2">
            <div className="card ">
                <div className="card-body ">
                    <strong className=""> {bookTitle} </strong>
                    <h6> {bookAuthor} </h6>
                    <strong className=""> {userName} </strong>
                    <h6> {userEmail} </h6>
                    <h6> {userPhone} </h6>
                    <h6> {borrowingDate} </h6>
                    <h6> {returnDate} </h6>
                </div>
            </div>
        </div>
    )

};

export default HistoryItem;