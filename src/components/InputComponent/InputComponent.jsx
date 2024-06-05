import { useEffect, useState } from "react";

export default function InputComponent({ title, resetInputs, inputRef }) {
  const [isValid, setIsValid] = useState(true);
  const [isDeselected, setIsDeSelected] = useState(false);

  // const inputChangeHandler = (event) => {
  //   setText(event.target.value);
  // };

  // useEffect(() => {
  //   if (resetInputs) {
  //     setIsValid(true);
  //     setIsDeSelected(false);
  //   }
  // }, [resetInputs]);

  // useEffect(() => {
  //   if (!text.length > 0 && isDeselected) {
  //     setIsValid(false);
  //   } else {
  //     setIsValid(true);
  //   }
  // }, [text, isDeselected]);

  return (
    <div className="m-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {title}
      </label>
      <input
        type="text"
        className={"form-control " +(!isValid ? "is-invalid" : "")}
        id="exampleFormControlInput1"
        // onChange={inputChangeHandler}
        onBlur={() => setIsDeSelected(true)}
        // value={text}
        required
        ref={inputRef}
      />
    </div>
  );
}
