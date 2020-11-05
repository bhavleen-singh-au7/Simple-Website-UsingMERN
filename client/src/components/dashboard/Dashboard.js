import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Maintenance from "./maintenance.svg";

const Dashboard = (auth) => {
  return (
    <div className="container text-center">
      <h1 className="mb-4">Dashboard</h1>
      <img
        className="m-5"
        width="300px"
        src={Maintenance}
        alt="dashboard_img"
      />
      <h5>This page is Under Construction.</h5>
      <br />
      <p>HeadOver to Posts Section To See Public Posts.</p>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
