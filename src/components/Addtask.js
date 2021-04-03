import React, { useState } from "react";

const Addtask = ({ onAdd }) => {
  const [text, settext] = useState("");
  const [day, setday] = useState("");
  const [reminder, setreminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add task");
      return;
    }

    onAdd({ text, day, reminder });
    settext("");
    setday("");
    setreminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setday(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-black" type="submit" calue="Save Task" />
    </form>
  );
};

export default Addtask;
