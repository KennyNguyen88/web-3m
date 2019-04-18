import React, {Component} from 'react'

import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";

import HistoryList from "./HistoryList";

const History = ({histories}) => {

    return(
        <div className="container">
            <div className="row">
                <div className='col-xl-12'>
                    <h1 className="text-center p-2">Books Management</h1>
                </div>
            </div>
            <HistoryList histories={histories}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    const {firestore: {
        ordered: {
            histories
        }
    }} = state;
    return {histories};
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'histories'
    }])
)(History);