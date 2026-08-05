import React from "react";

export const Card = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Key Platform Features</h1>
      <p className="text-center">
        Our cutting-edge environment is optimized for development<br></br>{" "}
        speed, security, and responsive UI design
      </p>

      <div className="row">
        <div  className="col-md-4">
          <div className="card p-3">
          <div style={{justifyContent:"center"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFG8ef-kXQbIJ3R8vnNkRcqhxuwba-QdqmwSDAMbATTw&s=10"style={{height:"100px",width:"100px"}}/>
            </div>
            <h5>Super Fast Bhild</h5>
            <p>
              Optimized compilation pipeline built <br></br> on top of vite for
              rapid updates.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
          <div style={{justifyContent:"center"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOxYFpD4u0E7IjNOZzCJtmQ8QciMYCInR8G6H2Qsihw&s"style={{height:"100px",width:"100px"}}/>
            </div>
            <h5>Secure Routing</h5>
            <p>
              state-of-the-art client validation and <br></br>Routing
              safeguards.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
          <div style={{justifyContent:"center"}}>
          <img src="https://i.pinimg.com/236x/a3/2c/5a/a32c5abf4166d1d540ef6d3aa1beac94.jpg"style={{height:"100px",width:"100px"}}/>
           </div>
            <h5>Modern interface</h5>
            <p>
              stunning interactive UI built with <br></br> high- quality
              Bootstrap components.
            </p>
          </div>
        </div>
        <div style={{ margin: "50px", width: "800px", }} className="col-md-8 mx-auto">
          <div className="card p-3">
            <button
              style={{
                backgroundColor: "lightblue",
                width: "200px",
                borderRadius: "15px",
              }}
            >
              interactive Guide
            </button>

            <h5>React State & Optimization Playgroud</h5>
            <p>
              Learn and practice advanced React hooks including useRef,<br></br>{" "}
              useMemo, useCallback, and useReducer with our live feedback
              editor.
            </p>
            <button  style={{ backgroundColor: "lightblue", width: "200px" }}>
              Go to Playgroud →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
