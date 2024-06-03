import { ResetIcon } from "@radix-ui/react-icons";

export default function Button({setNumber}) {
  const handleClick = (event) => {
    setNumber(0);
    event.currentTarget.blur()
  };
  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
