function Todo(props) {
  function deletHandler() {
    alert("i try learning react for future :)");
    console.log("I like to learn reac");
    console.log(props.text);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deletHandler}>
          Delet
        </button>
      </div>
    </div>
  );
}

export default Todo;
