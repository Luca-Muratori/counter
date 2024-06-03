import { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import PlusMinusCTA from "./PlusMinusCTA";
import Title from "./title";

export default function Card() {
  const [number, setNumber] = useState(0);
  const locked = number === 5 ? true : false

  return (
    <div className={` card ${locked ? "card--limit" :""}`}>
      <Title locked={locked}/>
      <Count number={number}/>
      <Button setNumber={setNumber}/>
      <PlusMinusCTA setNumber={setNumber} locked={locked}/>
    </div>
  );
}
