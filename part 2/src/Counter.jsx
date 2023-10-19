import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-red-100">
        <div className="flex flex-col w-80 h-80 justify-center items-center bg-red-600 text-white rounded-lg">
          <p className="text-[100px] mb-8 font-extrabold animate-bounce">{count}</p>
          <div>
            <button
              className="text-slate-700 bg-white px-3 py-1 rounded-md font-bold hover:bg-slate-200"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="text-slate-700 bg-white px-3 py-1 rounded-md ms-6 hover:bg-slate-200 font-bold"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
