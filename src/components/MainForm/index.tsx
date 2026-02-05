import { PlayCircle } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
  const { setState } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!taskNameInput.current) {
      return;
    }

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Por favor, insira o nome da tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "workTime",
    };

    setState((prevState) => ({
      ...prevState,
      activeTask: newTask,
      currentCycle: 1,
      secondsRemaining: newTask.duration * 60,
      formattedSecondsRemaining: `${String(newTask.duration).padStart(2, "0")}:00`,
      tasks: [...prevState.tasks, newTask],
    }));

    taskNameInput.current.value = "";
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <Input
          id="task"
          type="text"
          labelText="text"
          placeholder="Sei la"
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>O proximo intervalo eh de 00:00 minutos</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <Button type="submit" icon={<PlayCircle />} />
      </div>
    </form>
  );
}
