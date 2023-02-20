import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-800 font-sans">
        Sending us a massage
      </h2>
      <p className="text-center text-gray-800 py-2 font-serif">
        We are standing by!
      </p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://images.unsplash.com/photo-1675950083665-3b1f4d5dcc07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2 " type="text" placeholder="First" />
            <input className="border m-2 p-2 " type="text" placeholder="Last" />
            <input className="border m-2 p-2 " type="email" placeholder="Email" />
            <input className="border m-2 p-2 " type="tel" placeholder="Phone" />
            <input className="border m-2 p-2 col-span-2" type="text" placeholder="Address" />
            <textarea className="border m-2 p-2 col-span-2" cols="30" rows="10"></textarea>
            <button className=" col-span-2 m-2 p-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
