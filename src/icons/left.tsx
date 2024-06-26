const LeftSvgComponent = ({ fill = "currentColor", stroke = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    viewBox="0 0 24 24"
    stroke={stroke}
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LeftSvgComponent;
