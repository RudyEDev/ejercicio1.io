import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { IoLogoLaravel } from "react-icons/io5";
import { AiFillApple } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiTwotoneMessage } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineSpotify } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className="w-full h-24 flex flex-col justify-center sticky top-0 z-50 shadow-sm shadow-secondary bg-white">
        <div className="container mx-auto lg:px-3 w-full">
          <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
            {/*Logo*/}
            <div className="flex flex-col items-center gap-y-4 mt-5">
              <div className="flex items-center gap-x-2">
                <IoLogoLaravel size={32} color="#ff3a00" />
                <p className="text-gray-600">firefilies.ai</p>
              </div>
            </div>
            {/*Fin - Logo*/}

            {/*Menu*/}
            <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
              <a
                href=""
                className="leading-normal no-underline text-black text-lg hover:text-black"
              >
                products
              </a>
              <a
                href=""
                className="leading-normal no-underline text-moradobajo text-lg hover:text-black"
              >
                use case
              </a>
              <a
                href=""
                className="leading-normal no-underline text-black text-lg hover:text-black"
              >
                migration
              </a>
              <a
                href=""
                className="leading-normal no-underline text-black text-lg hover:text-black"
              >
                recourse
              </a>
              <a
                href=""
                className="leading-normal no-underline text-black text-lg hover:text-black"
              >
                pricing
              </a>
            </ul>
            {/*Fin - Menu*/}

            {/*Botones*/}
            <div className="flex gap-4 max-lg:hidden">
              <button className="bg-transparent rounded shadow h-12 px-6 outline-none text-secondary hover:bg-moradobajo hover:text-black cursor-pointer text-base transition-bg hover:border hover:border-primary">
                login
              </button>
              <button className="bg-transparent rounded shadow h-12 px-6 outline-none text-secondary hover:bg-moradobajo hover:text-black cursor-pointer text-base transition-bg hover:border hover:border-primary">
                Request demo
              </button>
              <button className="rounded shadow h-12 px-6 bg-morado outline-none text-black hover:bg-secondary hover:text-secondary cursor-pointer text-base transition-bg hover:bg-transparent">
                Get started
              </button>
            </div>
            {/*Fin - Botones*/}

            {/*Dropdown*/}
            {dropdown ? (
              <div
                onClick={showDropdown}
                className="lg:hidden text-[22px] cursor-pointer text-black"
              >
                <MdClose />
              </div>
            ) : (
              <div
                onClick={showDropdown}
                className="lg:hidden text-[22px] cursor-pointer text-black"
              >
                <HiMenuAlt3 />
              </div>
            )}
            {/* aparicion de menus */}
            {dropdown && (
              <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
                <div className="w-full flex flex-col items-baseline gap-4">
                  <ul className="flex flex-col justify-center w-1">
                    <a href="" className="menu">
                      productos
                    </a>
                    <a href="" className="menu">
                      user case
                    </a>
                    <a href="" className="menu">
                      integration
                    </a>
                    <a href="" className="menu">
                      resources
                    </a>
                    <a href="" className="menu">
                      pricing
                    </a>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <section class="py-12 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 ">
          <div class="flex flex-col items-center">
            <div class="relative mt-10 md:order-2 md:mt-24">
              <div class="relative mx-auto grid max-w-lg grid-cols-1 gap-10 md:max-w-none md:grid-cols-3 lg:gap-10">
                <div class="relative flex flex-col overflow-hidden gap-9">
                  <div>
                    <div class="flex gap-5 font-bold">
                      <AiFillSetting color="#8A2BE2" />
                      <h1>Sales </h1>
                    </div>
                    <div class="flex-1">
                      <blockquote class="mt-2 flex-1">
                        <p class="text-[16px] font-[400] leading-snug text-gray-700">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div>
                    <div class="flex gap-5 font-bold">
                      <AiFillSignal color="#8A2BE2" />
                      <h1>Sales </h1>
                    </div>
                    <div class="flex-1">
                      <blockquote class="mt-2 flex-1">
                        <p class="text-[16px] font-[400] leading-snug text-gray-700">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div>
                    <div class="flex gap-5 font-bold">
                      <AiFillApple color="#8A2BE2" />

                      <h1>Sales </h1>
                    </div>
                    <div class="flex-1">
                      <blockquote class="mt-2 flex-1">
                        <p class="text-[16px] font-[400] leading-snug text-gray-700">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div>
                    <div class="flex gap-5 font-bold">
                      <AiOutlineSearch color="#8A2BE2" />
                      <h1>Sales </h1>
                    </div>
                    <div class="flex-1">
                      <blockquote class="mt-2 flex-1">
                        <p class="text-[16px] font-[400] leading-snug text-gray-700">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div class="relative flex flex-col overflow-hidden gap-9">
                  <div>
                    <div class="flex gap-5 font-bold">
                      <AiFillSetting color="#8A2BE2" />
                      <h1>Sales </h1>
                    </div>
                    <div class="flex-1">
                      <blockquote class="mt-2 flex-1">
                        <p class="text-[16px] font-[400] leading-snug text-gray-700">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div>
                    <div class="flex gap-5 font-bold">
                      <AiFillSignal color="#8A2BE2" />
                      <h1>Sales </h1>
                    </div>
                    <div class="flex-1">
                      <blockquote class="mt-2 flex-1">
                        <p class="text-[16px] font-[400] leading-snug text-gray-700">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div>
                    <div class="flex gap-5 font-bold">
                      <AiFillApple color="#8A2BE2" />

                      <h1>Sales </h1>
                    </div>
                    <div class="flex-1">
                      <blockquote class="mt-2 flex-1">
                        <p class="text-[16px] font-[400] leading-snug text-gray-700">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div>
                    <div class="flex gap-5 font-bold">
                      <AiOutlineSearch color="#8A2BE2" />
                      <h1>Sales </h1>
                    </div>
                    <div class="flex-1">
                      <blockquote class="mt-2 flex-1">
                        <p class="text-[16px] font-[400] leading-snug text-gray-700">
                          You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div class="relative flex flex-col overflow-hidden gap-9">
                  <div></div>

                  <div class="bg-purple-500 w-auto h-auto flex justify-center items-center rounded-full overflow-hidden">
                    <div class="rounded-full overflow-hidden w-auto h-auto flex justify-center items-center bg-gray-200">
                      <img
                        class="rounded-full h-full w-auto"
                        src="/memo.jpg"
                        alt="Descripción de la imagen"
                      />
                    </div>
                  </div>

                  <blockquote class="mt-2 flex-1">
                    <p class="text-[16px] font-[400] leading-snug text-gray-700">
                      You made it so simple. My new site is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change.
                    </p>
                  </blockquote>

                  <a
                    href=""
                    className="flex items-center no-underline text-morado text-lg hover:text-black"
                  >
                    <span className="mr-1">Read Customer Story</span>
                    <AiOutlineArrowRight color="#8A2BE2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
