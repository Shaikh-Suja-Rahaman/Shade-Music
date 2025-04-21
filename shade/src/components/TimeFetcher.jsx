import { useEffect, useState } from "react";

const TimeFetcher = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto  rounded-xl shadow-md text-center">
      <h2 className="text-xl font-bold mb-4"></h2>
      <p className="text-5xl font-mono text-green-600 font-bold ">
        {time.toLocaleTimeString()}
      </p>
      <p className="mt-2 text-gray-500">
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </p>
    </div>
  );
};

export default TimeFetcher;
