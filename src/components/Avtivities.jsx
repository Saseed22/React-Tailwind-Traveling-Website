import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h1 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-teal-900 text-2xl font-bold">Resorts</h1>
        <img
        className="w-full h-[500px] relative object-cover border-4 border-white shadow-2xl"
          src="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h1 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-teal-900 text-2xl font-bold">Surfing</h1>
        <img
        className="w-full h-[500px] relative object-cover border-4 border-white shadow-2xl"
          src="https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1cmZpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h1 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-teal-900 text-2xl font-bold">Diving</h1>
        <img
        className="w-full h-[500px] relative object-cover border-4 border-white shadow-2xl"
          src="https://images.unsplash.com/photo-1539498508910-091b5e859b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGl2aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
