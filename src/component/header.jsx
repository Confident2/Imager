import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Search from "./Search";
import Button from "./Button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
      console.log(  window.removeEventListener("click", handleClick))
    };
  }, []);

  return (
    <div>
      <header className="fixed z-40 top-0 left-0 w-full bg-white shadow-md">
        <div className=" mx-auto px-4 py-3 flex  ">
          <h1 className="text-2xl font-bold flex text-black ">
            <Link href="/" legacyBehavior>
              <a className="hover:underline ">iMAGER</a>
            </Link>
          </h1>
          <div className="flex grow mr-5">
            <Search />
            <nav className="flex grow-0 ml-3">
              <ul className="flex gap-3 text-grey ">
                {router.pathname !== "/" && (
                  <li>
                    <Link href="/" legacyBehavior>
                      <a className={router.pathname === "/" ? "active" : ""}>
                        Home
                      </a>
                    </Link>
                  </li>
                )}

                {router.pathname !== "/about-us" && (
                  <li>
                    <Link href="/about-us" legacyBehavior>
                      <a>Explore</a>
                    </Link>
                  </li>
                )}
                {router.pathname !== "/contact-us" && (
                  <li>
                    <Link href="/contact-us" legacyBehavior>
                      <a>Advertise</a>
                    </Link>
                  </li>
                )}
                  {router.pathname !== "/contact-us" && (
                  <li>
                    <Link href="/contact-us" legacyBehavior>
                      <a className="animate-vZKGD bg-gradient-to-tr from-pink-500 to-blue-500 bg-clip-text text-transparent background-size[500%]">iMGER+</a>
                    </Link>
                  </li>
                )}
                  <div className="p-2">

                  </div>

                <div className="flex gap-3 ">
                 {router.pathname !== "/contact-us" && (
                  <li>
                    <Link href="/signup" legacyBehavior>
                      <a >Sign-Up</a>
                    </Link>
                  </li>
                )}

                <Button />
                </div>
              </ul>


            </nav>
           
          </div>

          <button
            type="button"
            className="block  text-gray-600 hover:text-gray-900 focus:text-gray-900 "
            onClick={toggleMenu}
          >
            <HiMenuAlt3 className="h-4 w-4 " />
          </button>
        </div>
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="absolute border-black h-40 w-80 right-5 rounded-md mt-2 md:mt-0 "
          style={{ zIndex: 10, }}
          ref={menuRef}
        >
          <nav className="block right-5 bg-white shadow-md  rounded-b-md -mt-2 " style={{ border: "1px solid #dbdbdb" }}>
            <ul className="block flex-col md:flex-row gap-2 py-4 text-gray-600">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="block px-4  hover:bg-gray-100">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events" legacyBehavior>
                  <a className="block px-4  hover:bg-gray-100">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" legacyBehavior>
                  <a className="block px-4  hover:bg-gray-100">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" legacyBehavior>
                  <a className="block px-4  hover:bg-gray-100">Contact Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Transition>
      </header>
    </div>
  );
}