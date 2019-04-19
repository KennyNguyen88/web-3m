import React from 'react';
import { faBook, faTshirt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HistoryItem = (
    {
        bookTitle,
        bookAuthor,
        userName,
        userEmail,
        userPhone,
        actionType,
        createdDate,
        itemType,
        itemSize
    }
) => {
    const itemIcon = itemType === 'book' ? <FontAwesomeIcon icon={faBook}/> :<FontAwesomeIcon icon={faTshirt}/>;
    return (
        <li className="list-group-item">
            <div className={`action-type mb-2 ${actionType}`}>
                {itemSize && <span className="mr-2">{itemSize}</span>}
                <span className="mr-2">{itemIcon}</span>
                <span>{actionType}</span>
            </div>
            <h6 className="text-bold"> {bookTitle}</h6>
            {/*<p className="small text-muted"> {bookAuthor} </p>*/}
            <h6 className="text-bold"> {userName} </h6>
            {/*<p className="small text-muted"> {userEmail} </p>*/}
            {/*<p className="small text-muted"> {userPhone} </p>*/}
            <h6 className="small">{createdDate}</h6>
        </li>
    )

};

export default HistoryItem;