function Header() {
  return (
    <header className="p-12 flex flex-row justify-center items-center gap-12 mb-12">
      <div className=" flex flex-col justify-center items-center bg-amber-50 rounded-md">
        <div className="bg-rose-400 px-4 py-2 rounded-t-md">
          <p className=" font-bebas text-white text-2xl font-extralight">
            Woman's Health
          </p>
        </div>
        <p className="text-black font-pacifico text-5xl mt-2">30</p>
        <p className="text-black font-pacifico  text-3xl mb-4">DAY</p>
      </div>
      <div>
        <h1 className="text-6xl font-bebas tracking-wide text-center text-pink-400 uppercase font-extrabold">
          {" "}
          Working out Challenge
        </h1>
        <p className="text-6xl font-bebas tracking-wide text-center text-pink-400 uppercase font-extrabold">
          <strong>The 30 Workouts Program</strong>
        </p>
      </div>
    </header>
  );
}

export default Header;
