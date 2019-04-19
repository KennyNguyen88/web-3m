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
                    <div className="card">
                      <div className="card-header">
                          Latest Event
                      </div>
                        <div className="card-body">
                            <HistoryList histories={histories}/>
                        </div>
                    </div>
                </div>
            </div>

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
        collection: 'histories', limit: 3
    }])
)(History);