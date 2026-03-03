import { Bolt, Dumbbell, Lock, Weight } from "lucide-react";
import {
  workoutProgram as traning_plan,
  type WorkoutPlan,
  type WorkoutType,
} from "../utils/plan_db";
import WorkoutCard from "./WorkoutCard";

function Grid() {
  const isLocked = false;
  const selectedWorkout = 0;
  return (
    <div>
      {Object.keys(traning_plan).map((workout, workoutIndex) => {
        const type: WorkoutType =
          workoutIndex % 3 === 0
            ? "Push"
            : workoutIndex % 3 === 1
              ? "Pull"
              : "Legs";
        const trainingPlan: WorkoutPlan = traning_plan[workoutIndex];
        const dayNum = workoutIndex + 1;
        const icon =
          workoutIndex % 3 === 0 ? (
            <Dumbbell />
          ) : workoutIndex % 3 === 1 ? (
            <Weight />
          ) : (
            <Bolt />
          );

        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              key={workoutIndex}
              trainingPlan={trainingPlan}
              type={type}
              workoutIndex={workoutIndex}
              dayNum={dayNum}
            />
          );
        }
        return (
          <button
            className={`px-4 py-2 m-1 border-2 rounded-sm ${
              isLocked ? "in-active" : "active"
            }`}
          >
            <div>
              <p>
                Day{" "}
                {workoutIndex + 1 < 10
                  ? "0" + (workoutIndex + 1)
                  : workoutIndex + 1}
              </p>
            </div>
            {isLocked ? <Lock /> : icon}

            <div>
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Grid;
