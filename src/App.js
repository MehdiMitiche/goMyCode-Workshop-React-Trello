import React, { useState } from "react";
import Section from "./components/Section";
import NewTask from "./components/NewTask";
import "antd/dist/antd.css";
import "./App.css";

const TASKS = [
  {
    id: 1,
    title: "Task Title 01",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 0,
  },
  {
    id: 2,
    title: "Task Title 02",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 0,
  },
  {
    id: 3,
    title: "Task Title 03",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 0,
  },
  {
    id: 4,
    title: "Task Title 04",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "study",
    status: 1,
  },
  {
    id: 5,
    title: "Task Title 05",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 1,
  },
  {
    id: 6,
    title: "Task Title 06",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "study",
    status: 1,
  },
  {
    id: 7,
    title: "Task Title 07",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 2,
  },
  {
    id: 8,
    title: "Task Title 08",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 2,
  },
  {
    id: 9,
    title: "Task Title 09",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 2,
  },
];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [show, setShow] = useState(false);

  const toNextStep = (id) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: task.status + 1 };
        }
        return task;
      });
    });
  };

  const toPreviousStep = (id) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: task.status - 1 };
        }
        return task;
      });
    });
  };

  const newTask = (title, description, ddl, tag) => {
    setTasks((tasks) => {
      return [
        ...tasks,
        {
          title,
          description,
          id: Math.floor(Math.random() * 10000),
          ddl,
          tag,
          status: 0,
        },
      ];
    });
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="page-content">
      <NewTask
        newTask={newTask}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />

      <div className="container">
        <div className="content">
          <Section
            toPreviousStep={toPreviousStep}
            toNextStep={toNextStep}
            title="To Do"
            data={tasks.filter((task) => task.status === 0)}
          />
          <Section
            toPreviousStep={toPreviousStep}
            toNextStep={toNextStep}
            title="Currently Doing"
            data={tasks.filter((task) => task.status === 1)}
          />
          <Section
            toPreviousStep={toPreviousStep}
            toNextStep={toNextStep}
            title="Completed"
            data={tasks.filter((task) => task.status === 2)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
