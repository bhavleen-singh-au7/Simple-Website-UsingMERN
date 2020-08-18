import React from "react";
import App from "../App";

const Home = () => {
  return (
    <App>
      <div className="text-center p-5">
        <h1 className="mt-5">This Page is Not Protected</h1>
        <h2>Anyone can visit Home Page</h2>
      </div>
    </App>
  );
};

export default Home;