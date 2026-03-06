import { Dumbbell, Lock, PersonStanding, Weight } from "lucide-react";
import {
  workoutProgram as traning_plan,
  type RawData,
  type WeightsInfor,
  type WorkoutPlan,
  type WorkoutType,
  type SaveWorkout,
} from "../utils/plan_db";
import WorkoutCard from "./WorkoutCard";
import { useState } from "react";

function Grid() {
  const isLocked = false;
  const [savedWorkout, setSavedWorkout] = useState<SaveWorkout | null>(() => {
    const data = localStorage.getItem("workoutPro");
    return data ? JSON.parse(data) : null;
  });
  const [selectedWorkout, setSelectedWorkout] = useState<number | null>(null);

  function handleSave(index: number, rawdata: RawData) {
    // Save to local storage and modify the saved workout state
    const newObj = {
      ...savedWorkout,
      [index]: {
        ...rawdata,
        isCompleted:
          !!rawdata.isCompleted || !!savedWorkout?.[index]?.isCompleted,
      },
    };

    setSavedWorkout(newObj);
    localStorage.setItem("workoutPro", JSON.stringify(newObj));
    setSelectedWorkout(null);
  }

  function handleComplete(index: number, data: { weights: WeightsInfor }) {
    // Complete the workout
    const newWeightsInfo: RawData = { ...data, isCompleted: true };
    handleSave(index, newWeightsInfo);
  }

  return (
    <div className="font-pacifico grid sm:grid-cols-4 md:grid-cols-6 gap-2 p-24">
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
            <PersonStanding className="w-12 h-12" />
          );

        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              key={workoutIndex}
              trainingPlan={trainingPlan}
              type={type}
              workoutIndex={workoutIndex}
              dayNum={dayNum}
              handleSave={handleSave}
              handleComplete={handleComplete}
              savedWeights={savedWorkout?.[workoutIndex]?.weights}
            />
          );
        }
        return (
          <button
            onClick={() => setSelectedWorkout(workoutIndex)}
            className={`p-4 m-1 rounded-sm flex flex-col gap-3 justify-center items-center hover:cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-150 ${type === "Push" ? "bg-pink-200" : type === "Pull" ? "bg-pink-300" : "bg-pink-400"}  ${isLocked ? "in-active" : "active"}`}
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
