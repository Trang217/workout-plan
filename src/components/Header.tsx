function Header() {
  return (
    <header className="p-12 flex flex-row justify-center items-center gap-4">
      <div className=" flex flex-col justify-center items-center bg-amber-50 rounded-md">
        <div className="bg-orange-600 px-2 py-1 rounded-t-md">
          <p className="text-white font-extralight">Woman's Health</p>
        </div>
        <p className="text-black font-extrabold text-4xl">30</p>
        <p className="text-black font-extrabold text-3xl">DAY</p>
      </div>
      <div>
        <h1 className="text-4xl text-center text-white uppercase font-extrabold">
          {" "}
          Working out Challenge
        </h1>
        <p className="text-4xl text-center text-white uppercase font-extrabold">
          <strong>The 30 Workouts Program</strong>
        </p>
      </div>
    </header>
  );
}

export default Header;
