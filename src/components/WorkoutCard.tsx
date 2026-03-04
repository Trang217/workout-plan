import { Bolt, CircleQuestionMarkIcon, Dumbbell, Weight } from "lucide-react";
import type {
  ExerciseDescription,
  WorkoutPlan,
  WorkoutType,
} from "../utils/plan_db";
import React from "react";
import Modal from "./Modal";

interface WorkoutCardProps {
  trainingPlan: WorkoutPlan;
  workoutIndex: number;
  type: WorkoutType;
  dayNum: number;
}
function WorkoutCard({
  trainingPlan,
  workoutIndex,
  type,
  dayNum,
}: WorkoutCardProps) {
  const { warmup, workout } = trainingPlan;
  const showExerciseDescription: ExerciseDescription = {
    name: "hello",
    desc: "nice to see you ",
  };
  const icon =
    workoutIndex % 3 === 0 ? (
      <Dumbbell />
    ) : workoutIndex % 3 === 1 ? (
      <Weight />
    ) : (
      <Bolt />
    );
  return (
    <div className="col-span-full flex flex-col gap-1 bg-rose-200 p-8">
      <Modal
        showExerciseDescription={showExerciseDescription}
        handleCloseModal={() => {}}
      />
      <div className="bg-rose-200  rounded-lg">
        <div className="flex flex-row justify-between text-2xl">
          <p>Day {dayNum}</p>
          {icon}
        </div>

        <div className="mt-2">
          <h2 className="text-4xl">
            <b>{type}</b> Workout
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 overflow-x-auto overflow-y-hidden">
        <div className="col-span-3">
          <h4 className="text-2xl">Warm up</h4>
        </div>
        <h6 className="text-xl">Sets</h6>
        <h6 className="text-xl">Reps</h6>
        <h6 className="text-xl col-span-2">Max Weight</h6>

        {warmup.map((warmupEx, warmup_index) => {
          return (
            <React.Fragment key={warmup_index}>
              <div className="col-span-3 flex gap-2">
                <p>
                  {warmup_index + 1}. {warmupEx.name}
                </p>
                <button>
                  <CircleQuestionMarkIcon />
                </button>
              </div>
              <p>{warmupEx.sets}</p>
              <p>{warmupEx.reps}</p>
              <input
                className="col-span-2"
                placeholder="N/A"
                type="text"
                disabled
              />
            </React.Fragment>
          );
        })}
      </div>

      <div className="grid grid-cols-7 gap-4 overflow-x-auto overflow-y-hidden">
        <div className="col-span-3 ">
          <h4 className="text-2xl">Workout</h4>
        </div>
        <h6 className="text-xl">Sets</h6>
        <h6 className="text-xl">Reps</h6>
        <h6 className="text-xl col-span-2">Max Weight</h6>

        {workout.map((workoutEx, workout_index) => {
          return (
            <React.Fragment key={workout_index}>
              <div className="col-span-3 flex gap-2">
                <p>
                  {workout_index + 1}. {workoutEx.name}
                </p>
                <button>
                  <CircleQuestionMarkIcon />
                </button>
              </div>
              <p>{workoutEx.sets}</p>
              <p>{workoutEx.reps}</p>
              <input className="col-span-2" placeholder="14" type="text" />
            </React.Fragment>
          );
        })}
      </div>

      <div>
        <button>Save & Exit</button>
        <button disabled={true}>Complete</button>
      </div>
    </div>
  );
}

export default WorkoutCard;
