import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

type TipsProps = {
  nextCycleType: "workTime" | "shortBreakTime" | "longBreakTime";
};

export function Tips({ nextCycleType }: TipsProps) {

  const { state } = useTaskContext();

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por: {state.config.workTime} minutos</span>,
    shortBreakTime: <span>Descanse por: {state.config.shortBreakTime} minutos</span>,
    longBreakTime: <span>Descanse por: {state.config.longBreakTime} minutos</span>,
  };

  const tipsForWhenNoActiveTask = {
    workTime: <span>Proximo ciclo: {state.config.workTime} minutos.</span>,
    shortBreakTime: (
      <span>Proximo descanso: {state.config.shortBreakTime} minutos.</span>
    ),
    longBreakTime: <span>Proximo descanso: {state.config.longBreakTime} minutos.</span>,
  };

  return <p>{state.activeTask ? tipsForWhenActiveTask[state.activeTask.type] : tipsForWhenNoActiveTask[nextCycleType]}</p>;
}
