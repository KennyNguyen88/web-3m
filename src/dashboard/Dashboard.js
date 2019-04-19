import React from "react";

import History from "../history";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-container container-fluid p-2">
                <div className="row">
                    <div className="col-12 col-md-8">

                    </div>
                    <div className="col-12 col-md-3 offset-md-1">
                        <History />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Dashboard;