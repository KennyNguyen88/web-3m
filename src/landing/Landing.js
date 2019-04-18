import React from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

export const Landing = () => {
    return (
        <div>
            This is Landing
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const {firestore: {
        ordered: {
            todos
        }
    }} = state;
    console.log('todos',todos);
    return {todos};
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'todos'
    }])
)(Landing)