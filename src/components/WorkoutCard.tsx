import { Bolt, CircleQuestionMarkIcon, Dumbbell, Weight } from "lucide-react";
import {
  exerciseDescriptions,
  type ExerciseDescription,
  type WeightsInfor,
  type WorkoutPlan,
  type WorkoutType,
} from "../utils/plan_db";
import React, { useState } from "react";
import Modal from "./Modal";

interface WorkoutCardProps {
  trainingPlan: WorkoutPlan;
  workoutIndex: number;
  type: WorkoutType;
  dayNum: number;
  savedWeights: WeightsInfor | null;
  handleSave: (index: number, data: { weights: WeightsInfor }) => void;
  handleComplete: (index: number, data: { weights: WeightsInfor }) => void;
}

function WorkoutCard({
  trainingPlan,
  workoutIndex,
  type,
  dayNum,
  handleSave,
  handleComplete,
  savedWeights,
}: WorkoutCardProps) {
  const initialWeightsInfo: WeightsInfor = Object.fromEntries(
    trainingPlan.workout.map((el) => [el.name, ""]),
  );
  const { warmup, workout } = trainingPlan;
  const [weightsInfo, setWeightsInfo] = useState<WeightsInfor>(
    savedWeights || initialWeightsInfo,
  );
  const [showExerciseDescription, setShowExerciseDescription] =
    useState<ExerciseDescription | null>(null);

  const isCompleteDisable = Object.values(weightsInfo).some(
    (weight) => weight === "",
  );

  function handleAddWeight(title: string, weight: string) {
    console.log(weightsInfo);
    const newWeightsObj: WeightsInfor = {
      ...weightsInfo,
      [title]: weight,
    };
    setWeightsInfo(newWeightsObj);
  }

  const icon =
    workoutIndex % 3 === 0 ? (
      <Dumbbell />
    ) : workoutIndex % 3 === 1 ? (
      <Weight />
    ) : (
      <Bolt />
    );
  return (
    <div className="col-span-full flex flex-col gap-1 bg-pink-100 p-8">
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => setShowExerciseDescription(null)}
        />
      )}
      <div className="bg-pink-100 mb-6 rounded-lg">
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

      <div className="grid grid-cols-7 gap-4 overflow-x-auto overflow-y-hidden mb-6">
        <div className="col-span-3">
          <h4 className="text-2xl">Warm up</h4>
        </div>
        <h6 className="text-xl">Sets</h6>
        <h6 className="text-xl">Reps</h6>
        <h6 className="text-xl text-center col-span-2">Max Weight</h6>

        {warmup.map((warmupEx, warmup_index) => {
          return (
            <React.Fragment key={warmup_index}>
              <div className="col-span-3 flex flex-row justify-start items-center gap-2">
                <p className="text-xl font-light capitalize">
                  {warmup_index + 1}. {warmupEx.name}
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    setShowExerciseDescription({
                      name: warmupEx.name,
                      desc: exerciseDescriptions[warmupEx.name],
                    })
                  }
                >
                  <CircleQuestionMarkIcon />
                </button>
              </div>
              <p className="text-xl">{warmupEx.sets}</p>
              <p className="text-xl">{warmupEx.reps}</p>
              <input
                className="col-span-2 border-2 rounded-4xl outline-0 px-4 py-1 text-center text-xl text-gray-800 placeholder:text-gray-600 disabled:opacity-40"
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
        <h6 className="text-xl text-center col-span-2">Max Weight</h6>

        {workout.map((workoutEx, workout_index) => {
          return (
            <React.Fragment key={workout_index}>
              <div className="col-span-3 flex flex-row justify-start items-center gap-2">
                <p className="text-xl font-light capitalize">
                  {workout_index + 1}. {workoutEx.name}
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() =>
                    setShowExerciseDescription({
                      name: workoutEx.name,
                      desc: exerciseDescriptions[workoutEx.name],
                    })
                  }
                >
                  <CircleQuestionMarkIcon />
                </button>
              </div>
              <p className="text-xl ">{workoutEx.sets}</p>
              <p className="text-xl ">{workoutEx.reps}</p>
              <input
                className="col-span-2 border-2 rounded-4xl outline-0 px-4 py-1 text-center text-xl text-gray-800 placeholder:text-gray-600"
                placeholder="0"
                type="number"
                value={weightsInfo[workoutEx.name]}
                onChange={(e) => {
                  handleAddWeight(workoutEx.name, e.target.value);
                }}
              />
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex flex-row justify-center items-center gap-4 mt-6">
        <button
          onClick={() => handleSave(workoutIndex, { weights: weightsInfo })}
          className="border-2 rounded-lg py-3 text-xl px-6 hover:scale-105 hover:cursor-pointer transition-all duration-150"
        >
          Save & Exit
        </button>
        <button
          className="border-2 rounded-lg py-3 px-6 text-xl disabled:opacity-35 disabled:cursor-not-allowed hover:scale-105 hover:cursor-pointer transition-all duration-150"
          disabled={isCompleteDisable}
          onClick={() => handleComplete(workoutIndex, { weights: weightsInfo })}
        >
          Complete
        </button>
      </div>
      {isCompleteDisable && (
        <p className="text-lg mx-auto mt-6">
          You need to finish all workout exercise to complete workout day and go
          to next day workout!
        </p>
      )}
    </div>
  );
}

export default WorkoutCard;
