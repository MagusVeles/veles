import { useEffect, useRef, useState } from "react";
import terminalCommands from "../../helpers/data/terminal-commands";

const CustomInput = ({ setTerminalCommands }) => {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);

    setTerminalCommands(
      terminalCommands.filter((cmd, idx) => {
        return cmd === inputValue;
      }).join(",")
    );
  };

  const focusOnInput = () => {
    if (inputRef.current) {
      setTimeout(() => {
        console.log("Focus!");
        inputRef.current.focus();
      }, 10);
    }
  };

  useEffect(() => {
    focusOnInput();
  }, [inputRef]);

  const onBlur = () => {
    focusOnInput();
  };

  return (
    <div className="custom-input">
      <input
        type="text"
        ref={inputRef}
        onBlur={() => onBlur()}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <span className="custom-input__value">{inputValue}</span>
    </div>
  );
};
export default CustomInput;
