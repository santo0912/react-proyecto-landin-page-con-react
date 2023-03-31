import React from "react";


const Jumbotron = () => {
	return (
		
        <div className="col-9 justify-content-center mx-auto">
        <div className="h-100 p-5 text-dark rounded-3 bg-light">
          <h2>A warm welcome!</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-primary" type="button">Call to action!</button>
        </div>
      </div>
	);
};

export default Jumbotron;
