import { useRef, useState } from "react";
import InputComponent from "../InputComponent/InputComponent";

export default function FormComponent({addTodoHandler, resetInputs}) {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const data = {title: titleRef.current.value, description: descriptionRef.current.value};

    addTodoHandler(data);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    // setTitle("");
    // setDescription("");
  };
  return (
    <form className="card m-5" onSubmit={formSubmitHandler}>
      <InputComponent title={"عنوان کار"} inputRef={titleRef} resetInputs={resetInputs} />

      <InputComponent
        title={"توضیحات"}
        resetInputs={resetInputs}
        inputRef={descriptionRef}
      />
      <button
        className="btn btn-success btn-lg m-3"
        style={{
          width: "30%",
        }}
        type="submit"
      >
        ثبت
      </button>
    </form>
  );
}
