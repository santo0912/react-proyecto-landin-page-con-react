import React from "react";

const Card = () => {
  return (
    <div className="card col-9 mx-auto" style={{ width: "18rem", height: "400px" }}>
      <div
        style={{
          width: "100%",
          height: 150,
          backgroundColor: "gray",
        }}
      ></div>

      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Card;
