import { useState, useEffect } from "react";
import "../App.css";
import Task from "./Task";
function Home() {
  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, description }]);
  };

  const deleteItem = (index) => {
    const filteredArray = task.filter((val, i) => {
      return i !== index;
    });
    setTask(filteredArray);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="container" style={{ height: "77vh" }}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button type="submit">ADD</button>
      </form>
      <div className="taskDiv">
        {task.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteItem={deleteItem}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
