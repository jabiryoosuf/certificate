import React, {useState } from "react";
import "../components/star.css";
import { Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";




// const ratingChanged = () => {
//   setRating(rating);
// };

function Star() {
  const [isPrint,setIsPrint] = useState(false)
const printDoc = () => {
  setIsPrint(true)
  window.print();
};
  return (
    <>
    <div className="star">
      <div className="star-content">
        <h1>ScoreCard</h1>
        <h4>( Based on Practices and Assenssments)</h4>
        <h2>Web Application Developer</h2>
        <h5>React:<Rating/></h5>
        <h5 >Angular: <Rating/></h5>
        <h5 >Bootstarp: <Rating/></h5>
        <h5 >Python:<Rating/></h5>
        <h5 >Figma:<Rating/></h5>
        <h5 >Fullstack:<Rating/></h5>
        <h5 >Mernstack:<Rating/></h5>
     
      </div>
      </div>
      {!isPrint && (
      <Button
        style={{ marginLeft: "14rem",width:"150px"}}
        color="success"
        className="print_hide"
        onClick={printDoc}
      >
        download the file
      </Button>)}
      </>
  );
}

export default Star;
