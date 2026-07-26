interface PepperIconProps {
  count: 1 | 2;
}

function PepperIcon({ count }: PepperIconProps) {
  return (
    <span
      style={{ fontSize: 18, letterSpacing: 1 }}
      role="img"
      aria-label={`Level ${count}`}
    >
      {count === 2 ? "🌶️🌶️" : "🌶️"}
    </span>
  );
}

export default PepperIcon;
