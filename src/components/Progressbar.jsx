import { useEffect, useState } from 'react';

export const Progressbar = ({ value, setValue }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [complete, setComplete] = useState(false);
  const [turnWhite, setTurnWhite] = useState('blue');

  const maxWidth = 550; // Assuming 550px is the maximum width you want to reach

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressWidth((val) => {
        const newVal = val + 1;
        if (newVal >= maxWidth) {
          setComplete(true);
          clearInterval(intervalId);
        }
        // setValue((newVal / maxWidth) * 100); // Update the percentage value based on the current width4
        console.log(newVal);

        setValue((newVal / maxWidth) * 100);
        if ((newVal / maxWidth) * 100 >= 49) {
          setTurnWhite('white');
        }

        return newVal; // Return the updated width
      });
    }, 20);
  }, []);

  return (
    <>
      <div className="progress-box">
        <span style={{ color: turnWhite }}>{value.toFixed()}%</span>{' '}
        {/* Display the percentage as an integer */}
        <div className="progress" style={{ width: `${progressWidth}px` }}></div>
      </div>
      <div>{complete ? 'Complete!' : 'Processing...'}</div>
    </>
  );
};
