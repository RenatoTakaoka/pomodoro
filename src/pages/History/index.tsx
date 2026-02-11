import { Trash2 } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/Main";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks } from "../../utils/sortTask";
import { useState } from "react";
import type { TaskModel } from "../../models/TaskModel";

export function History() {
  const { state } = useTaskContext();
  const [direction, setDirection] = useState<"asc" | "desc">("desc");
  const [field, setField] = useState<keyof TaskModel>("startDate");
  const sortedTasks = sortTasks({
    tasks: state.tasks,
    direction,
    field,
  });

  function handleSortTasks(field: keyof TaskModel) {
    setField(field);
    setDirection(direction === "asc" ? "desc" : "asc");
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <Button icon={<Trash2 />} color="red" aria-label="Clear history" title="Clear history" />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSortTasks("name")} className={styles.thSort}>Tarefa</th>
                <th onClick={() => handleSortTasks("duration")} className={styles.thSort}>Duracao</th>
                <th onClick={() => handleSortTasks("startDate")} className={styles.thSort}>Data</th>
                <th>Status</th>
                <th onClick={() => handleSortTasks("type")} className={styles.thSort}>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map(task => {
                const taskType = {
                  workTime: "Foco",
                  shortBreakTime: "Pausa Curta",
                  longBreakTime: "Pausa Longa",
                };

                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskType[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
