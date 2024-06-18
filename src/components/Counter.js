import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + count);

  const futureDate = currentDate.toLocaleDateString();

  return (
    <>
      <div className="counter-container">
        <button onClick={() => setStep((prev) => prev - 1)}>-</button>
        <input
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
          type="range"
        />
        <p>Step {step}</p>
        <button onClick={() => setStep((prev) => prev + 1)}>+</button>
      </div>

      <div className="counter-container">
        <button onClick={() => setCount((prev) => prev - step)}>-</button>
        <input
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          type="text"
        />
        <button onClick={() => setCount((prev) => prev + step)}>+</button>
      </div>

      <div>
        {count < 0 && (
          <p>
            {Math.abs(count)} day{count < -1 && "s"} ago {futureDate}
          </p>
        )}

        {count === 0 && <p>Today {futureDate}</p>}

        {count > 0 && (
          <p>
            {count} day{count > 1 && "s"} from today {futureDate}
          </p>
        )}
      </div>
    </>
  );
}
