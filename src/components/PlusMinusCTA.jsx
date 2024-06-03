import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function PlusMinusCTA({ children }) {
  return (
    <div className="button-container">
      {children}
    </div>
  );
}

export function CountButton({ setNumber, locked, type }) {
  const handleClick = (event) => {
    setNumber((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) return 0;
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });
    event.currentTarget.blur()
  };
  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
