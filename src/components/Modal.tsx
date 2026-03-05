import { createPortal } from "react-dom";
import type { ExerciseDescription } from "../utils/plan_db";

interface ModalProps {
  showExerciseDescription: ExerciseDescription;
  handleCloseModal: () => void;
}
function Modal({ showExerciseDescription, handleCloseModal }: ModalProps) {
  const { name, desc } = showExerciseDescription;
  return createPortal(
    <div className="fixed top-0 left-0 min-w-screen min-h-screen flex flex-col justify-center items-center">
      <button
        className="absolute z-20 inset-0 bg-slate-600 opacity-50 mx-auto"
        onClick={handleCloseModal}
      />
      <div className="relative w-full mx-auto z-30 max-w-5xl flex flex-col gap-4 p-6 bg-slate-800">
        <div>
          <h6 className="text-2xl text-amber-50 font-bebas">Name</h6>
          <h2 className="text-2xl text-amber-50 font-bebas">
            {name.replaceAll("-", " ")}
          </h2>
        </div>

        <div>
          <h6 className="text-2xl text-amber-50 font-bebas">Description</h6>
          <p className="text-2xl text-amber-50 font-bebas">{desc}</p>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!,
  );
}

export default Modal;
