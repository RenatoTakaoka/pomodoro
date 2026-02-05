import { PlayCircle, StopCircle } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../tips";

export function MainForm() {
  const { state, dispatch } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({
      type: TaskActionTypes.START_TASK,
      payload: newTask,
    });

    taskNameInput.current.value = "";
  }

  function handleInterruptTask() {
    if (!state.activeTask) {
      return;
    }

    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK,
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <Input
          id="task"
          type="text"
          labelText="Nome da tarefa"
          placeholder="Nome da tarefa"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <Tips nextCycleType={nextCycleType} />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <Button
            aria-label="Iniciar tarefa"
            title="Iniciar tarefa"
            type="submit"
            icon={<PlayCircle />}
            key="Submmit"
          />
        ) : (
          <Button
            key="Interrupt"
            aria-label="Interromper tarefa"
            title="Interromper tarefa"
            color="red"
            type={"button"}
            icon={<StopCircle />}
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
