function Hero() {
  return (
    <div className=" font-pacifico text-gray-800 flex flex-col items-center gap-4 max-w-6xl mx-auto mb-12 bg-amber-50 p-6 md:p-16 rounded-lg shadow-2xl">
      <p className="text-xl md:text-2xl text-center">
        Everything you need to know about building a strength training routine
        that’ll help you meet your goals plus sample workouts to get you started
      </p>

      <p className="text-lg text-center md:text-xl">
        To complete this program you <strong>MUST</strong> follow 3 simple
        rules:
      </p>

      <div className="flex flex-col md:flex-row justify-around items-center gap-2">
        <div className="flex flex-col items-center border-2 rounded-lg px-2 py-4 text-center ">
          <p className="text-xl text-pink-400">
            <b>Rest</b>
          </p>
          <p className="text-md md:text-lg">
            Ensure that you are taking rest days where neccessary
          </p>
        </div>

        <div className="flex flex-col items-center border-2 rounded-lg px-2 py-4 text-center ">
          <p className="text-xl text-pink-400">
            <b>Reps</b>
          </p>
          <p className="text-md md:text-lg">
            Every rep is a pause rep following a{" "}
            <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">
              2 - 2 - 2 tempo
            </abbr>
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 border-2 rounded-lg px-2 py-4 text-center ">
          <p className="text-xl text-pink-400">
            <b>
              <b>Weight*</b>
            </b>
          </p>
          <p className="text-md md:text-lg">
            Select the maximum weight that allows you to complete the set with
            good form
          </p>
        </div>
      </div>
      <small className="italic text-md">
        *The first and second set should be at 75% and 85% of your working
        weight used for the last two sets.
      </small>

      <p className="text-md md:text-lg">
        This traning plan uses a structure know as <b>Bro Split</b>, and follows
        this rotation
      </p>
      <p className="text-md md:text-xl">
        <b>
          <i>Push &rarr; Pull &rarr; Leg &rarr; Repeat</i>
        </b>
      </p>
      <p className="text-md md:text-xl text-pink-400 text-center">
        Complete all odf the workouts below and track your progress along the
        way
      </p>
    </div>
  );
}

export default Hero;
