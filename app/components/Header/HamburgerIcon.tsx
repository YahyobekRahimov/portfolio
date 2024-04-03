export default function HamburgerIcon({
  className = "",
  color = "#fff",
  onClick,
}: {
  className?: string;
  color?: string;
  onClick: () => void;
}) {
  return (
    <svg
      width="16"
      height="15"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g fill={color} fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );
}
