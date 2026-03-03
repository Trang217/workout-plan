import { Bolt, Dumbbell, Lock, Weight } from "lucide-react";
import {
  workoutProgram as traning_plan,
  type WorkoutPlan,
  type WorkoutType,
} from "../utils/plan_db";
import WorkoutCard from "./WorkoutCard";

function Grid() {
  const isLocked = false;
  const selectedWorkout = null;
  return (
    <div className="grid sm:grid-cols-4 md:grid-cols-6 gap-2 p-24">
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
            <Dumbbell className="w-12 h-12" />
          ) : workoutIndex % 3 === 1 ? (
            <Weight className="w-12 h-12" />
          ) : (
            <Bolt className="w-12 h-12" />
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
            className={`p-4 m-1 bg-pink-300 rounded-sm flex flex-col gap-3 justify-center items-center hover:cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-150  ${
              isLocked ? "in-active" : "active"
            }`}
          >
            <div>
              <p className="text-2xl">
                Day{" "}
                {workoutIndex + 1 < 10
                  ? "0" + (workoutIndex + 1)
                  : workoutIndex + 1}
              </p>
            </div>
            {isLocked ? <Lock className="w-12 h-12" /> : icon}

            <div>
              <h4 className="text-2xl">
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
