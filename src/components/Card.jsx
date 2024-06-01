import Button from "./Button";
import Count from "./Count";
import PlusMinusCTA from "./PlusMinusCTA";
import Title from "./title";

export default function Card() {
  return (
    <div>
      <Title />
      <Count />
      <Button />
      <PlusMinusCTA />
    </div>
  );
}
