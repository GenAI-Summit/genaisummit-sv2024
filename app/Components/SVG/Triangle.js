const Triangle = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.5 1.5 L13.5 13.5 L1.5 13.5 Z" fill="currentColor" />
        </svg>
      ) : (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5 L13.5 1.5 L7.5 13.5 Z" fill="currentColor" />
        </svg>
      )}
    </>
  );
};

export default Triangle;
