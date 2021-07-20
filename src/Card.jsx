import React from "react";

const Card = (props) => {
console.log()

let real_weight=Math.round(props.weight*0.1);
let real_height=Math.round(props.height*10);

  return (
    <>
      <div className='child-card'>
        <p className='card-head'> id:{props.id}</p>
        <h1 className='card-name'> {props.name}</h1>
        <img className='card-img' src={props.img} alt="loading....." />
        <p>
          <span className='card-height'>height:{real_height}Cm </span>
          <span className='card-weight'> weight:{real_weight}Kg</span>
        </p>
        <h3 className='card-xp'>BaseExp: {props.exp}</h3>
        <h3 className='card-type'> type: {props.type}</h3>
        <h3 className='card-move'>moves: {props.move}</h3>
      </div>
    </>
  );
};

export default Card;
