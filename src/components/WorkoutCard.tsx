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
    <div>
      <Modal
        showExerciseDescription={showExerciseDescription}
        handleCloseModal={() => {}}
      />
      <div>
        <div>
          <p>Day {dayNum}</p>
          {icon}
        </div>

        <div>
          <h2>
            <b>{type}</b>Workout
          </h2>
        </div>
      </div>

      <div>
        <div>
          <h4>Warm up</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6>Max Weight</h6>

        {warmup.map((warmupEx, warmup_index) => {
          return (
            <React.Fragment key={warmup_index}>
              <div>
                <p>
                  {warmup_index + 1}. {warmupEx.name}
                </p>
                <button>
                  <CircleQuestionMarkIcon />
                </button>
              </div>
              <p>{warmupEx.sets}</p>
              <p>{warmupEx.reps}</p>
              <input placeholder="N/A" type="text" disabled />
            </React.Fragment>
          );
        })}
      </div>

      <div>
        <div>
          <h4>Workout</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6>Max Weight</h6>

        {workout.map((workoutEx, workout_index) => {
          return (
            <React.Fragment key={workout_index}>
              <div>
                <p>
                  {workout_index + 1}. {workoutEx.name}
                </p>
                <button>
                  <CircleQuestionMarkIcon />
                </button>
              </div>
              <p>{workoutEx.sets}</p>
              <p>{workoutEx.reps}</p>
              <input placeholder="14" type="text" />
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
