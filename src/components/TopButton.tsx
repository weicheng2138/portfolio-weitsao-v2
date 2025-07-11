import { useEffect, useState } from 'react';

const TopButton = () => {
  const [isTop, setIsTop] = useState(false);
  const [shouldScrollToTop, setShouldScrollToTop] = useState(false);

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShouldScrollToTop(false);
    }
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTop, shouldScrollToTop]);

  const handleClick = () => {
    setShouldScrollToTop(true);
  };

  return (
    <>
      {!isTop && (
        <button
          onClick={handleClick}
          className="border-secondary03 bg-secondary01 hover:bg-primary hover:text-secondary01 fixed right-4 bottom-8 h-20 w-20 cursor-pointer rounded-full border opacity-50 shadow-md hover:border-0 hover:opacity-100 sm:right-8 lg:right-[50%] lg:translate-x-[500px] lg:transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-1 inline-block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <br />
          回頂端
          {isTop && <span className="sr-only">回頂端</span>}
        </button>
      )}
    </>
  );
};
export default TopButton;
