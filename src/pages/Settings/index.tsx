import { Save } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { MainTemplate } from "../../templates/Main";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showToast } from "../../adapters/showToast";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      showToast.error("Por favor, insira valores numéricos válidos para as configurações.");
      return;
    }

    if (workTime <= 0 || shortBreakTime <= 0 || longBreakTime <= 0) {
      showToast.error("Por favor, insira valores maiores que zero para as configurações.");
      return;
    }

    if (workTime > 180 || shortBreakTime > 60 || longBreakTime > 60) {
      showToast.error("Por favor, insira valores menores ou iguais a 180 para foco e 60 para pausas.");
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showToast.success("Configurações salvas com sucesso!");
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configuracoes</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>Modifique suas configuracoes aqui.</p>
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#666", marginTop: "0.5rem" }}>
          Valores padroes: Foco - 25 minutos, Pausa curta - 5 minutos, Pausa longa - 15 minutos
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} className="form">
          <div className="formRow">
            <Input id="workTime" labelText="Foco" ref={workTimeInputRef} defaultValue={state.config.workTime} />
          </div>
          <div className="formRow">
            <Input
              id="shortBreakTime"
              labelText="Pausa curta"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className="formRow">
            <Input
              id="longBreakTime"
              labelText="Pausa longa"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
            />
          </div>
          <div className="formRow">
            <Button
              id="save"
              icon={<Save />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
              type="submit"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
