import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        action="https://getform.io/f/d4cb7fc8-797d-41fe-97d2-3bc75a0dd448"
        method="POST"
        className="flex flex-col max-w-[800px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pt-1">
            {" "}
            reach me at siddhardha123123@gmail.com
          </p>
        </div>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          className="px-1 py-2 bg-[#ffffff]"
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          className="my-2 px-1 py-2 bg-[#ffffff]"
        />
        <textarea
          name="message"
          id=""
          rows="10"
          className="bg-[#ffffff] px-1 py-2 text-black"
          placeholder="Message"
        ></textarea>
        <button className="text-white border bg-pink-600 border-pink-600 hover:bg-black px-4 py-3 my-8 mx-auto rounded-md flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact