import { createPortal } from "react-dom";
import type { ExerciseDescription } from "../utils/plan_db";

interface ModalProps {
  showExerciseDescription: ExerciseDescription;
  handleCloseModal: () => void;
}
function Modal({ showExerciseDescription, handleCloseModal }: ModalProps) {
  const { name, desc } = showExerciseDescription;
  return createPortal(
    <div>
      <button onClick={handleCloseModal} />
      <div>
        <div>
          <h6>Name</h6>
          <h2>{name.replaceAll("-", " ")}</h2>
        </div>

        <div>
          <h6>Description</h6>
          <p>{desc}</p>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!,
  );
}

export default Modal;
