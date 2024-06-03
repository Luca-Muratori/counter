import { ResetIcon } from "@radix-ui/react-icons";

export default function Button({setNumber}) {
  const handleClick = () => {
    setNumber(0);
  };
  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
