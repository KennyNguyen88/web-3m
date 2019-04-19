import React from 'react';
import moment from 'moment';
import HistoryItem from "./HistoryItem";
import withTransition from "../withTransition";
const HistoryList = ({histories}) => {

    return (
        <ul className='list-group list-group-flush'>
            {
                histories &&
                    histories.map(
                        (history,index) => {

                            console.log('history',history);

                            const {
                                id,
                                action: actionType,
                                createdDate,
                                item:{
                                    id: itemId,
                                    author: bookAuthor,
                                    name: bookTitle,
                                    type: itemType,
                                    size: itemSize
                                },
                                user:{
                                    id: userId,
                                    email: userEmail,
                                    fullName: userName,
                                    phoneNumber: userPhone
                                }

                            } = history;

                            return <HistoryItem
                                bookTitle={bookTitle}
                                bookAuthor={bookAuthor}
                                userName={userName}
                                userPhone={userPhone}
                                userEmail={userEmail}
                                history={history}
                                key={index}
                                actionType={actionType}
                                itemType={itemType}
                                itemSize={itemSize}
                                createdDate={moment(createdDate.toDate()).fromNow()}
                            />
                        }
                    )
            }
        </ul>
    )
};

const WrappedComponent = withTransition(HistoryList);

export default WrappedComponent;