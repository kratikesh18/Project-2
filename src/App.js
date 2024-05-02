import React from "react";

const App = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-l flex flex-col justify-between items-center from-purple-600 to to-cyan-500 ">
      <div className="flex flex-col gap-4 justify-center items-center pt-8  md:flex-row">
        <img
          src="https://github.com/kratikesh18/Project-2/blob/main/src/error-removebg-preview.png"
          alt="Error section"
        />
        <div className="flex flex-col gap-4 text-white text-center ">
          <h1 className=" font-bold tracking-wide  text-3xl">
            Hey! We are building something special.
          </h1>
          <p className="text-xl">Hold your breath, revealing soon.</p>
          <p className="text-center text-lg">
            till check out the code{" "}
            <a
              href="https://github.com/kratikesh18/project-3"
              className="text-black underline"
            >
              Here.
            </a>
          </p>
        </div>
      </div>
      <footer className="text-white">2024, Kartikesh</footer>
    </div>
  );
};

export default App;
