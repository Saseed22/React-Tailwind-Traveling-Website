import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        className="w-full h-full object-cover"
        src="https://media.istockphoto.com/id/1371256107/photo/the-turquoise-wave-water-background-of-summer-beach-at-the-seashore-and-beach-summer-pattern.jpg?b=1&s=170667a&w=0&k=20&c=AeZrWkj40mCW6jwz4AxV4_g1Nz91RBvXo3fVWoHr73E="
        alt="/"
      />
      <div className="max-w-[800px] m-auto">
        <div className="absolute top-[40%] w-full md:top-[50%] max-w-[600px] h-full flex flex-col p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic text-teal-500">With Weekaway</h2>
          <p className=" text-teal-600 italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id unde
            distinctio iste facilis porro, totam animi dolores aliquid tempora
            fugiat, dolor iusto obcaecati dolorum blanditiis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
