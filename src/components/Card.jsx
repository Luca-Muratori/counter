import { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import PlusMinusCTA from "./PlusMinusCTA";
import Title from "./title";

export default function Card() {
  const [number, setNumber] = useState(0);

  return (
    <div className="card">
      <Title />
      <Count number={number}/>
      <Button />
      <PlusMinusCTA setNumber={setNumber}/>
    </div>
  );
}
