interface Props {
  isBookmark: boolean;
}

const BookmarkIcon = ({ isBookmark }: Props) => {
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle
          fill={`${isBookmark ? "hsl(176, 72%, 28%)" : "#2F2F2F"}`}
          cx="28"
          cy="28"
          r="28"
          className="ease-linear duration-150"
        />
        <path
          fill={`${isBookmark ? "#ffffff" : "#B1B1B1"}`}
          d="M23 19v18l5-5.058L33 37V19z"
          className="ease-linear duration-150"
        />
      </g>
    </svg>
  );
};

export default BookmarkIcon;
