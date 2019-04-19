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
        <li className="list-group-item">
            <strong className=""> {bookTitle} </strong>
            <h6> {bookAuthor} </h6>
            <strong className=""> {userName} </strong>
            <h6> {userEmail} </h6>
            <h6> {userPhone} </h6>
            <h6> {borrowingDate} </h6>
            <h6> {returnDate} </h6>
        </li>
    )

};

export default HistoryItem;