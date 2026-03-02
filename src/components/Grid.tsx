import { Bolt, Dumbbell, Lock, Weight } from "lucide-react";
import { workoutProgram as traning_plan } from "../utils/plan_db";

function Grid() {
  const isLocked = false;
  return (
    <div>
      {Object.keys(traning_plan).map((workout, workoutIndex) => {
        return (
          <button className="px-4 py-2 m-1 border-2 rounded-sm">
            <div>
              <p>
                Day{" "}
                {workoutIndex + 1 < 10
                  ? "0" + (workoutIndex + 1)
                  : workoutIndex + 1}
              </p>
            </div>
            {isLocked ? (
              <Lock />
            ) : workoutIndex % 3 === 0 ? (
              <Dumbbell />
            ) : workoutIndex % 3 === 1 ? (
              <Weight />
            ) : (
              <Bolt />
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Grid;
