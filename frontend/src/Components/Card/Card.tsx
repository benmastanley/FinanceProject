import React from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
  description?: string;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1745872260939-e1f29a53610a?q=80&w=687&auto=format&fit=crop"
        alt="Image"
      />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">
        This is a description of the card. It provides some information about
        the content.
      </p>
      <button className="card-button">Click Me</button>
    </div>
  );
};

export default Card;
