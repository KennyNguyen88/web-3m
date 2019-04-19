import React from "react";
import withTransition from "../withTransition";

import History from "../history";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-container container-fluid pt-3">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="card">
                            <div className="card-header">
                                Some good news
                            </div>
                            <div className="card-body">
                                TBD
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 ">
                        <div className="card">
                            <div className="card-header">
                                Some good news
                            </div>
                            <div className="card-body">
                                TBD
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 ">
                        <div className="card">
                            <div className="card-header">
                                Some good news
                            </div>
                            <div className="card-body">
                                TBD
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 ">
                        <History />
                    </div>
                </div>
            </div>

        </div>
    )
};

const WrappedLogin = withTransition(Dashboard);

export default WrappedLogin;