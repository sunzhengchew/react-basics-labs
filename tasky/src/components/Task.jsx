import React from 'react';

const Task = (props) => {

     let priorityStyle = {};
  switch (props.priority) {
    case "High":
      priorityStyle = { backgroundColor: "red", color: "white", padding: "2px 6px", borderRadius: "4px" };
      break;
    case "Medium":
      priorityStyle = { backgroundColor: "orange", color: "white", padding: "2px 6px", borderRadius: "4px" };
      break;
    case "Low":
      priorityStyle = { backgroundColor: "green", color: "white", padding: "2px 6px", borderRadius: "4px" };
      break;
    default:
      priorityStyle = {};
  }
    
    return (
          <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>{props.description}</p>
            <b className='priority'><span style={priorityStyle}>{props.priority}</span></b>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;