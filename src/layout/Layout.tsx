import React, { useEffect, useState } from "react";
import router from "next/router";

//icons
import Dashboard_icon from "../components/common/icons/Dashboard_icon";
import MarketAnalysis_icon from "../components/common/icons/MarketAnalysis_icon";
import MarketWatch_icon from "../components/common/icons/MarketWatch_icon";
import People_icon from "../components/common/icons/People_icon";
import Dashbord_icon from "../components/common/icons/Dashbord_icon";
import Profile_icon from "../components/common/icons/Profile_icon";
import Login_icon from "../components/common/icons/Login_icon";

//components
import Chevron_Down_icon from "../components/common/icons/Chevron_Down_icon";

//redux
import { selectNamePage, selectScroll } from "../app/slice/commonSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const pages = [
  {
    id: 1,
    label: "خانه",
    value: "landing",
    url: "/",
    icon: <Dashboard_icon />,
  },
  {
    id: 2,
    label: "داشبورد",
    value: "dashboard",
    url: "/dashboard",
    icon: <Dashbord_icon />,
  },
  {
    id: 3,
    label: "پروفایل",
    value: "profile",
    url: "/",
    icon: <Profile_icon />,
  },
  {
    id: 4,
    label: "تحلیل بازار",
    value: "marketAnalysis",
    url: "/",
    icon: <MarketAnalysis_icon />,
  },
  {
    id: 5,
    label: " آنالیز هوشمند",
    value: "marketWatch",
    url: "/",
    icon: <MarketWatch_icon />,
  },

  {
    id: 6,
    label: "ورود",
    value: "login",
    url: "/login",
    icon: <Login_icon />,
  },
  {
    id: 7,
    label: "ثبت نام",
    value: "register",
    url: "/register",
    icon: <Login_icon />,
  },
];

function Layout({ children }: { children: any }) {
  //instance
  const [showMenu, setShowMenu] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [showAthen, setShowAthen] = useState(false);
  const namePage = useAppSelector(selectNamePage);
  const scroll = useAppSelector(selectScroll);
  const [showDrawer, setShowDrawer] = useState(false);

  //   const [pageName, setNamePage] = useState(namePage)

  useEffect(() => {
    if (
      namePage == "marketAnalysis" ||
      namePage == "marketWatch" ||
      namePage == "people"
    ) {
      setShowApp(true);
    } else {
      setShowApp(false);
    }
    if (namePage == "login" || namePage == "register") {
      setShowAthen(true);
    } else {
      setShowAthen(false);
    }
  }, [namePage]);

  return (
    <div className="w-full min-h-screen flex flex-row">
      {namePage == "landing" ? (
        <>
          <div className="w-full h-full">{children}</div>
          <div
            className={`w-full h-[60px]  justify-between items-center fixed top-0  md:hidden  flex z-30  duration-300 ${
              scroll >= 280 ? "bg-[#131e6d]" : "bg-transparent"
            }`}
          >
            <div className="text-white text-[28px] font-medium w-[100px] fle justify-center px-[30px]">
              BitView
            </div>
            <div
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="w-[50px] h-[50px] mr-[20px] bg-[#F8F9FA] rounded-lg shadow-xl border flex justify-center items-center z-30"
            >
              <span className="text-[24px] font-semibold"> &#9776;</span>
            </div>
            <div className="mt-[10px] absolute w-full flex justify-end">
              <div
                className={`mt-[60px]  fixed top-0 w-[200px] duration-200 px-[20px] bg-white rounded-b-lg shadow-xl overflow-hidden flex flex-col my-[10px] items-end gap-6 z-30 ${
                  showMenu ? "max-h-[400px]" : "max-h-0"
                } `}
              >
                {pages.slice(1, 7).map((page: any, index: any) => (
                  <div
                    className="h-[35px] w-full flex justify-end items-center"
                    key={index}
                    onClick={() => {
                      router.push(page.url);
                    }}
                  >
                    {page.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`md:flex hidden w-full h-[70px] fixed top-0  z-10   justify-center  ${
              scroll >= 1000 ? "bg-[#131e6d] duration-300" : "bg-transparent "
            }`}
          >
            <div className="w-full h-full max-auto container flex justify-between items-center">
              <div className="text-[30px] font-semibold text-white">
                BitView
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="relative   flex flex-row cursor-pointer gap-2 justify-center px-[30px]">
                  <div
                    dir="rtl"
                    className={` duration-200 px-[20px]  rounded-b-lg overflow-hidden flex flex-row items-end gap-10  text-white`}
                  >
                    {pages.slice(1, 5).map((page: any, index: any) => (
                      <div
                        key={index}
                        onClick={() => {
                          router.push(page.url);
                        }}
                      >
                        {page.label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[100px] h-[50px] bg-[#344767] cursor-pointer hover:bg-[#4b6186] text-white flex justify-center items-center rounded-lg">
                  ورود
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex flex-row justify-center">
          <div className="xl:w-10/12 w-full bg-[#F8F9FA] ">{children}</div>
          <div className="xl:hidden md:fixed hidden  top-0 right-0 md:flex flex-row items-center p-[10px] gap-2 cursor-pointer">
            <div
              onClick={() => {
                setShowDrawer(true);
              }}
              className="mt-[10px] w-[50px] h-[50px] mr-[20px] bg-[#F8F9FA] rounded-lg shadow-xl border flex justify-center items-center "
            >
              <span className="text-[24px] font-semibold"> &#9776;</span>
            </div>
          </div>
          <div
            className={`md:fixed  top-0 right-0 xl:hidden hidden bg-black  duration-300   ${
              showDrawer ? "w-[280px]  " : "translate-x-full"
            } md:flex flex-col z-30   `}
          >
            <div className="min-w-[280px]    min-h-screen bg-[#F8F9FA]   px-[5px] ">
              <div className="w-full h-full  flex flex-col items-center">
                <div
                  onClick={() => {
                    setShowDrawer(false);
                  }}
                  className="py-[20px] w-full flex flex-row justify-center gap-2"
                >
                  <img
                    src="/images/logoMainOne.png"
                    className="w-[30px] h-auto"
                  />
                  <span className="text-[#344767] font-medium cursor-pointer">
                    BitView
                  </span>
                </div>
                <div className="bg-[#344767] h-[1px] w-10/12 opacity-30 rounded-full bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />
                <div
                  className={`w-full flex flex-col items-end duration-200 overflow-hidden max-h-[200px]
                `}
                >
                  {pages.slice(0, 3).map((page: any, index: any) => (
                    <div
                      key={index}
                      onClick={() => {
                        router.push(page.url);
                        setShowDrawer(false);
                      }}
                      className={`mt-[10px]  h-[50px] text-[#344767] w-10/12   flex flex-row items-center justify-end  rounded-lg gap-4 px-[20px]  cursor-pointer ${
                        page.value == namePage
                          ? "bg-white shadow-xl duration-500"
                          : ""
                      }`}
                    >
                      <span>{page.label}</span>
                      <div
                        className={`w-[40px] h-[40px] flex justify-center items-center rounded-lg   ${
                          page.value == namePage
                            ? "bg-blue-400 text-white duration-500"
                            : "bg-white shadow-xl"
                        }`}
                      >
                        {page.icon}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="my-[20px] bg-[#344767] h-[1px] w-10/12 opacity-30 rounded-full bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />

                <div className="w-full flex flex-row justify-end gap-4 text-[#344767] cursor-pointer px-[20px]"></div>
                <div
                  className={`w-full flex flex-col items-end duration-200 overflow-hidden max-h-[200px]
                `}
                >
                  {pages.slice(3, 5).map((page: any, index: any) => (
                    <div
                      key={index}
                      onClick={() => {
                        router.push(page.url);
                        setShowDrawer(false);
                      }}
                      className={`mt-[10px] w-10/12 h-[50px] text-[#344767]   flex flex-row items-center justify-end  rounded-lg gap-4 px-[20px]  cursor-pointer ${
                        page.value == namePage
                          ? "bg-white shadow-xl duration-500"
                          : ""
                      }`}
                    >
                      <span>{page.label}</span>
                      <div
                        className={`w-[40px] h-[40px] flex justify-center items-center rounded-lg  ${
                          page.value == namePage
                            ? "bg-blue-400 text-white duration-500"
                            : "bg-white shadow-xl"
                        }`}
                      >
                        {page.icon}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="my-[20px] bg-[#344767] h-[1px] w-10/12 opacity-30 rounded-full bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />

                <div className="w-full flex flex-row justify-end gap-4 text-[#344767] cursor-pointer px-[20px]"></div>
                <div
                  className={`w-full flex flex-col items-end duration-200 overflow-hidden h-[200px] `}
                >
                  {pages.slice(5, 8).map((page: any, index: any) => (
                    <div
                      key={index}
                      onClick={() => {
                        router.push(page.url);
                        setShowDrawer(false);
                      }}
                      className={`mt-[10px] w-10/12 h-[50px] text-[#344767]   flex flex-row items-center justify-end  rounded-lg gap-4 px-[20px]  cursor-pointer ${
                        page.value == namePage
                          ? "bg-white shadow-xl duration-500"
                          : ""
                      }`}
                    >
                      <span>{page.label}</span>
                      <div
                        className={`w-[40px] h-[40px] flex justify-center items-center rounded-lg  ${
                          page.value == namePage
                            ? "bg-blue-400 text-white duration-500"
                            : "bg-white shadow-xl"
                        }`}
                      >
                        {page.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[60px]  justify-between items-center fixed top-0  z-10 bg-[#F8F9FA]  md:hidden  flex shadow-xl">
            <span className="text-[#344767] font-medium text-[20px] px-[20px]">
              BitView
            </span>
            <div
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="w-[50px] h-[50px] mr-[20px] bg-[#F8F9FA] rounded-lg shadow-xl border flex justify-center items-center "
            >
              <span className="text-[24px] font-semibold"> &#9776;</span>
              <div
                className={`mt-[55px]  fixed top-0 right-0 w-[180px] duration-200 px-[10px] bg-[#F8F9FA] rounded-b-lg shadow-xl overflow-hidden flex flex-col items-end gap-4 z-10 ${
                  showMenu ? "h-[450px]" : "h-0"
                } `}
              >
                {pages.map((page: any, index: any) => (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(page.url);
                    }}
                    className={` w-10/12 h-[40px] text-[#344767]   flex flex-row items-center justify-end  rounded-lg  px-[20px]  cursor-pointer ${
                      page.value == namePage
                        ? "bg-white shadow-xl duration-500"
                        : ""
                    }`}
                  >
                    {page.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-[220px] xl:block w-2/12  min-h-screen bg-[#F8F9FA]  hidden  ">
            <div className="w-full h-full  flex flex-col items-center">
              <div className="py-[20px] w-full flex flex-row justify-center gap-2">
                <img
                  src="/images/logoMainOne.png"
                  className="w-[30px] h-auto"
                />
                <span className="text-[#344767] font-medium">BitView</span>
              </div>
              <div className="bg-[#344767] h-[1px] w-10/12 opacity-30 rounded-full bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />
              <div
                className={`w-full flex flex-col items-end duration-200 overflow-hidden max-h-[200px]
                `}
              >
                {pages.slice(0, 3).map((page: any, index: any) => (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(page.url);
                    }}
                    className={`mt-[10px]  h-[50px] text-[#344767] w-10/12   flex flex-row items-center justify-end  rounded-lg gap-4 px-[20px]  cursor-pointer ${
                      page.value == namePage
                        ? "bg-white shadow-xl duration-500"
                        : ""
                    }`}
                  >
                    <span>{page.label}</span>
                    <div
                      className={`w-[40px] h-[40px] flex justify-center items-center rounded-lg   ${
                        page.value == namePage
                          ? "bg-blue-400 text-white duration-500"
                          : "bg-white shadow-xl"
                      }`}
                    >
                      {page.icon}
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-[20px] bg-[#344767] h-[1px] w-10/12 opacity-30 rounded-full bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />

              <div className="w-full flex flex-row justify-end gap-4 text-[#344767] cursor-pointer px-[20px]"></div>
              <div
                className={`w-full flex flex-col items-end duration-200 overflow-hidden max-h-[200px]
                `}
              >
                {pages.slice(3, 5).map((page: any, index: any) => (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(page.url);
                    }}
                    className={`mt-[10px] w-10/12 h-[50px] text-[#344767]   flex flex-row items-center justify-end  rounded-lg gap-4 px-[20px]  cursor-pointer ${
                      page.value == namePage
                        ? "bg-white shadow-xl duration-500"
                        : ""
                    }`}
                  >
                    <span>{page.label}</span>
                    <div
                      className={`w-[40px] h-[40px] flex justify-center items-center rounded-lg  ${
                        page.value == namePage
                          ? "bg-blue-400 text-white duration-500"
                          : "bg-white shadow-xl"
                      }`}
                    >
                      {page.icon}
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-[20px] bg-[#344767] h-[1px] w-10/12 opacity-30 rounded-full bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />

              <div className="w-full flex flex-row justify-end gap-4 text-[#344767] cursor-pointer px-[20px]"></div>
              <div
                className={`w-full flex flex-col items-end duration-200 overflow-hidden h-[200px] `}
              >
                {pages.slice(5, 8).map((page: any, index: any) => (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(page.url);
                    }}
                    className={`mt-[10px] w-10/12 h-[50px] text-[#344767]   flex flex-row items-center justify-end  rounded-lg gap-4 px-[20px]  cursor-pointer ${
                      page.value == namePage
                        ? "bg-white shadow-xl duration-500"
                        : ""
                    }`}
                  >
                    <span>{page.label}</span>
                    <div
                      className={`w-[40px] h-[40px] flex justify-center items-center rounded-lg  ${
                        page.value == namePage
                          ? "bg-blue-400 text-white duration-500"
                          : "bg-white shadow-xl"
                      }`}
                    >
                      {page.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
