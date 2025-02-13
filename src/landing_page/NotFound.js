import React from "react";
function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row  text-center">
        <h1 className="mt-5">404 NotFound</h1>
        <p>Sorry, the page your are looking for does not exist</p>

        {/* <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp Now
        </button> */}
      </div>
    </div>
  );
}

export default NotFound;
