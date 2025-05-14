import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment ,reset } from '../redux/slices/CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Counter App</h2>
        <div className="text-4xl font-semibold text-blue-600">{count}</div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
          >
            Decrement
          </button>
          
        </div>
        <button
            onClick={() => dispatch(reset())}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
          >
            Reset
          </button>
      </div>
    </div>
  );
};

export default Counter;
