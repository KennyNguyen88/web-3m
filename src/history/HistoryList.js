import React from 'react';
import HistoryItem from "./HistoryItem";

const HistoryList = ({histories}) => {

    return (
        <div className='row'>
            {
                histories &&
                    histories.map(
                        (history) => {

                            const {
                                book: {
                                    title: bookTitle,
                                    author: bookAuthor
                                },
                                user: {
                                    full_name: userName,
                                    phone_nunmber: userPhone,
                                    email: userEmail
                                },
                                borrowing_date: borrowingDate,
                                return_date: returnDate,
                                id
                            } = history;

                            return <HistoryItem
                                bookTitle={bookTitle}
                                bookAuthor={bookAuthor}
                                userName={userName}
                                userPhone={userPhone}
                                userEmail={userEmail}
                                borrowingDate={borrowingDate}
                                returnDate={returnDate}
                                history={history} key={id}
                            />
                        }
                    )
            }
        </div>
    )
};

export default HistoryList;