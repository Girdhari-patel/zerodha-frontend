import React from "react";

function Universe({ imageURL }) {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5 mt-5">
          <img src="media/images/smallcaseLogo.png" />

          <p className="text-small text muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/images/zerodhafundhouse.png" />

          <p className="text-small text muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/images/sensibullLogo.svg" />

          <p className="text-small text muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-5 mt-5">
          <img src="media/images/streak-logo.png" />

          <p className="text-small text muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/images/smallcaseLogo.png" />

          <p className="text-small text muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 mt-5">
          <img src="media/images/smallcaseLogo.png" />

          <p className="text-small text muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto" }}>SignUp Now</button>
      </div>
    </div>
  );
}

export default Universe;
