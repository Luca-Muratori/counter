import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function PlusMinusCTA({ setNumber, locked }) {
  return (
    <div className="button-container">
      <CountButton setNumber={setNumber} type="minus" locked={locked} />
      <CountButton setNumber={setNumber} type="plus" locked={locked}/>
    </div>
  );
}

function CountButton({ setNumber, locked, type }) {
  const handleClick =() => {
    setNumber((prev) => 
       { if(type==='minus'){
        const newCount=prev -1
        if(newCount <0) return 0
          return newCount
        } else {
          const newCount = prev + 1
          if(newCount>5){
            return 5
          }
          return newCount
        }}
);
  }
  return (
    <button
    disabled={locked}
      className="count-btn"
      onClick={handleClick}
    >
      {type === "minus" && (
        <MinusIcon className="count-btn-icon" />
      ) }
      {type === "plus" && (
        <PlusIcon className="count-btn-icon" />
      ) }
    </button>
  );
}
