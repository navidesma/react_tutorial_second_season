export default function InputComponent({ title, setText, text }) {
  const inputChangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="m-3">
      <label for="exampleFormControlInput1" class="form-label">
        {title}
      </label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        onChange={inputChangeHandler}
        value={text}
        req
      />
    </div>
  );
}
