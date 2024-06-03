import { useEffect, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import PlusMinusCTA, { CountButton } from "./PlusMinusCTA";
import Title from "./title";

export default function Card() {
  const [number, setNumber] = useState(0);
  const locked = number === 5 ? true : false;
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space" && number < 5) {
        const newCount = number + 1;
        if (newCount > 5) {
          setNumber(5);
          return;
        }
        setNumber(newCount);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [number]);

  return (
    <div className={` card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count number={number} />
      <Button setNumber={setNumber} />
      <PlusMinusCTA>
        <CountButton setNumber={setNumber} type="minus" locked={locked} />
        <CountButton setNumber={setNumber} type="plus" locked={locked} />
      </PlusMinusCTA>
    </div>
  );
}
