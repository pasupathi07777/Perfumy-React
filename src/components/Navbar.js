function Navbar() {
    return (
      <div className="navbar">
        <div className="title">perfumy</div>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 sm:hidden "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul className="hidden sm:flex">
          <li>home</li>
          <li>products</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    );
  }

  export default Navbar