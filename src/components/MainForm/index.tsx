import { PlayCircle } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <Input id="task" type="text" labelText="text" placeholder="Sei la" />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
