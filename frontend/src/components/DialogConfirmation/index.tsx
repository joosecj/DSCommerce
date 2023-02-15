import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
  message: string,
  onDialogAnswer: Function;
}

export default function DialogConfirmation({ message, onDialogAnswer }: Props) {
  return (
    <div className="dsc-dialog-background" onClick={() => onDialogAnswer(false)}>
      <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-cotainer">
          <div onClick={() => onDialogAnswer(false)}>
            <ButtonInverse text="NÃO" />
          </div>
          <div onClick={() => onDialogAnswer(true)} >
            <ButtonPrimary text="SIM" />
          </div>
        </div>
      </div>
    </div>
  );
}