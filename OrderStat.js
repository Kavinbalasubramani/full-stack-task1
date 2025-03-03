import React from "react";


const OrderStat = ({ title, value, icon }) => {
  return (
    <div className="order-stat">
      <span className="icon">{icon}</span>
      <div className="details">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default OrderStat;
