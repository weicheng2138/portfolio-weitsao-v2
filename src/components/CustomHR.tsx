type Props = {
  direction: 'left' | 'right';
  className?: string;
};
const CustomHR = ({ direction, className }: Props) => {
  return (
    <span className={`${className} block h-[42px]`}>
      {direction === 'left' && (
        <svg viewBox="0 0 420 42" className="h-full w-full">
          <polyline
            points="0,42 42,1.5 402,1.5"
            className="fill-none stroke-current stroke-3 text-primary"
          />
        </svg>
      )}
      {direction === 'right' && (
        <svg viewBox="0 0 420 42" className="h-full w-full">
          <polyline
            points="0,1.5 360,1.5 402,42"
            className="fill-none stroke-current stroke-3 text-primary"
          />
        </svg>
      )}
      <hr className="border-none border-transparent" />
    </span>
  );
};

export default CustomHR;
