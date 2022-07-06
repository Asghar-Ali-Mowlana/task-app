import React from "react";
// import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoRemoveCircleOutline } from "react-icons/io5";
import "./TaskCard.css";

const TaskCard = ({ taskNumber, taskDescription, taskDate }) => {
  return (
    <div className="task">
      <div className="taskHeader">
        <div className="taskHeading">{taskNumber}</div>
        <div className="taskIcon" onClick={() => {}}>
          <IoRemoveCircleOutline size="20px" color="#a0a0a1" />
        </div>
      </div>
      <div className="taskMain">{taskDescription}</div>
      <div className="taskFooter">{taskDate}</div>
    </div>
  );
};

export default TaskCard;
