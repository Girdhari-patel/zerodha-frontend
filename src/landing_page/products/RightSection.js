import React from 'react'

function RightSection({
    imageURL,
    productName,
    productDesription,
    learnMore

}) {
    return ( 
        <div className="container mt-5">
        <div className="row">
        <div className="col-6 p-4 mt-5">
            <h1>{productName}</h1>
            <p>{productDesription}</p>
            <div>
              <a href={learnMore}> learnMore</a>
            </div>
         </div>
         <div className="col-6 p-5">
            <img src={imageURL} style={{ width: "100%", height: "100%" }} />
            {/* <img src={imageURL} /> */}
          </div>
        </div>
      </div>
     );
}

export default RightSection;