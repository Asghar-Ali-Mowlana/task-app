import React, { useEffect, useState } from "react";
import TaskCard from "../Task/TaskCard";
import "./Main.css";

const Main = () => {
  const [allTasksMap, setAllTasksMap] = useState([]);

  useEffect(() => {
    setAllTasksMap(taskMap);
  }, []);

  const taskMap = [
    {
      id: 1,
      description:
        "This task is the second part of the first game. Kroink is now able to use full sentences, but she still can’t speak Dutch very well.",
      date: "12 October 2022",
    },
    {
      id: 2,
      description:
        "This task is the second part of the first game. Kroink is now able to use full sentences, but she still can’t speak Dutch very well.",
      date: "12 October 2022",
    },
    {
      id: 3,
      description:
        "This task is the second part of the first game. Kroink is now able to use full sentences, but she still can’t speak Dutch very well.",
      date: "12 October 2022",
    },
    {
      id: 4,
      description:
        "This task is the second part of the first game. Kroink is now able to use full sentences, but she still can’t speak Dutch very well.",
      date: "12 October 2022",
    },
    {
      id: 5,
      description:
        "This task is the second part of the first game. Kroink is now able to use full sentences, but she still can’t speak Dutch very well.",
      date: "12 October 2022",
    },
    {
      id: 6,
      description:
        "This task is the second part of the first game. Kroink is now able to use full sentences, but she still can’t speak Dutch very well.",
      date: "12 October 2022",
    },
  ];

  return (
    <div className="main">
      <div className="mainHeading">All Tasks</div>
      <div className="taskList">
        <>
          {allTasksMap.map((data, id) => {
            return (
              <div
                key={id}
                className="taskItem"
                onClick={() => {
                  setAllTasksMap(
                    allTasksMap.filter((e) => e !== allTasksMap[id])
                  );
                }}
              >
                <TaskCard
                  taskNumber={"Task " + data.id}
                  taskDescription={data.description}
                  taskDate={data.date}
                />
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Main;
