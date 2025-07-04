import React, { JSX } from "react";
import Card from "../Card/Card";

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="Apple" ticker="AAPL" price={110} />
      <Card companyName="Microsoft" ticker="MSFT" price={300} />
      <Card companyName="Google" ticker="GOOGL" price={2800} />
      <Card companyName="Amazon" ticker="AMZN" price={3400} />
      <Card companyName="Tesla" ticker="TSLA" price={700} />
      <Card companyName="Meta" ticker="META" price={350} />
      <Card companyName="Netflix" ticker="NFLX" price={500} />
    </div>
  );
};

export default CardList;
