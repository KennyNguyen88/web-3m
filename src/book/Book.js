import React from "react";
import withTransition from "../withTransition";
import BookList from "./BookList";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";

const Book = ({books}) => {
    return (
        <div className="book">
            <div className="book-container container-fluid pt-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Books Management</h1>
                    </div>

                </div>
                <BookList books={books}/>
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {

    const {firestore: {
        ordered: {
            items
        }
    }} = state;

    const filterItems = items && items.filter(({type}) => type === 'book');
    return {books: filterItems};
};

const wrappedComponent = withTransition(Book);

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'items'
    }])
)(wrappedComponent);
