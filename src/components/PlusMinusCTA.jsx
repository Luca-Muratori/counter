import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function PlusMinusCTA({setNumber}) {
  return (
    <div className="button-container">
      <button className="count-btn"  onClick={()=>{setNumber((prev)=>prev-1)}}><MinusIcon className="count-btn-icon"/></button>
      <button className="count-btn"  onClick={()=>{setNumber((prev)=>prev+1)}}><PlusIcon className="count-btn-icon"/></button>
    </div>
  );
}
