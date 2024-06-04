export default function TodoItem({title, description, deleteTodo}) {
  return (
    <div className="card mt-5 shadow-lg rounded bg-body">
      <h5 className="card-title m-2">{title}</h5>
      <div className="card-body">{description}</div>
      <button
        className="btn btn-danger m-3"
        style={{
          width: "20%",
        }}
        onClick={() => deleteTodo(title)}
      >
        اتمام کار
      </button>
    </div>
  );
}
