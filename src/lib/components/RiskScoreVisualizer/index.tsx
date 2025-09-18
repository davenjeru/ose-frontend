import type { FC } from 'react';

const getRiskScoreProps = (riskScore: number) => {
  if (riskScore > 75)
    return {
      text: 'Low Risk',
      backgroundColor: '#00FF00',
      textColor: 'black',
    };
  if (riskScore > 50)
    return {
      text: 'Medium Risk',
      backgroundColor: '#F6FF45',
      textColor: 'black',
    };
  else
    return {
      text: 'High Risk',
      backgroundColor: '#FF7E4B',
      textColor: 'white',
    };
};

const RiskScoreVisualizer: FC<{ score: number }> = ({ score }) => {
  const riskScoreProps = getRiskScoreProps(score);
  const radius = 80;
  const circumference = Math.PI * radius; // Half circumference for a semicircle
  const strokeWidth = 20;
  const viewBoxSize = radius * 2 + strokeWidth;

  // Calculate the path for the semicircle
  const pathDataGradient = `M ${strokeWidth / 2} ${radius + strokeWidth / 2} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth / 2} ${radius + strokeWidth / 2}`;
  const pathDataTrail = `M ${strokeWidth / 2} ${radius + strokeWidth / 2} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth / 2} ${radius + strokeWidth / 2}`;

  // Calculate stroke-dashoffset for score animation
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative h-max w-max">
      <svg
        width={viewBoxSize}
        height={radius + strokeWidth} // Adjust height for semicircle
        viewBox={`0 0 ${viewBoxSize} ${radius + strokeWidth}`}
        className="transform" // Rotate to start from the bottom
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0000" />
            <stop offset="10%" stopColor="#FF7E4B" />
            <stop offset="50%" stopColor="#F6FF45" />
            <stop offset="100%" stopColor={riskScoreProps.backgroundColor} />
          </linearGradient>
        </defs>

        {/* Background trail */}
        <path
          d={pathDataTrail}
          fill="none"
          stroke="#5473A2"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Score path with gradient */}
        <path
          d={pathDataGradient}
          fill="none"
          stroke="url(#gradient)" // Reference the gradient ID
          strokeWidth={strokeWidth / 2}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <div
        className={`
          absolute top-8 flex flex-col items-center gap-2 font-roboto text-lg
          font-light
        `}
      >
        <p>SCORE</p>
        <b className="-mt-2 text-center text-roboto-text-large font-bold">
          {Math.floor(score)}%
        </b>
        <div
          className={`
            relative flex w-46 flex-row justify-between text-center font-roboto
          `}
        >
          <p>0</p>
          <p
            style={{
              backgroundColor: riskScoreProps.backgroundColor,
              color: riskScoreProps.textColor,
            }}
            className={`
              absolute top-2 left-17 h-4 w-13 rounded-lg p-1 font-sora
              text-[6px] font-light
            `}
          >
            {riskScoreProps.text}
          </p>
          <p>100</p>
        </div>
      </div>
    </div>
  );
};

export default RiskScoreVisualizer;
