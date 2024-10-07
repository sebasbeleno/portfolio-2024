import { useEffect, useState } from "react";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    console.log(window.scrollY)
    window.scrollY  > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    //scrollHandler();
    //window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`relative  w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-stone-950 backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <p>sebasbeleno15@gmail.com</p>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-x-6">
              <li>
                <p>Resume</p>
              </li>
              <li>
                <p>Linkedin</p>
              </li>
              <li>
                <p>Github</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex"></div>
    </div>
  );
}
