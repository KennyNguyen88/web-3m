import React, {Fragment} from 'react';
import withTransition from "../withTransition";
import BookItem from "./BookItem";

const BookList = ({books}) => {
    return (
        <div className="row">
            {
                books &&
                    books.map(
                        (book, index) => {
                            const {
                                id,
                                author,
                                name,
                            } = book;

                            return <BookItem
                                key={id}
                                author={author}
                                name={name}
                                id={id}
                            />
                        }
                    )
            }
        </div>
    )
};

const wrappedComponent = withTransition(BookList);

export default wrappedComponent;

