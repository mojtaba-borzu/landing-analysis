import Link from 'next/link'
import React, { useEffect, useState } from 'react'

//redux
import { selectShowDrawer, setShowDrawer } from '../app/slice/commonSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'

function DesktopLayout({ children }: { children: any }) {
  const [loader, setLoader] = useState(false)
  //instace
  const dispatch = useAppDispatch()

  //selectors
  const showDrawer = useAppSelector(selectShowDrawer)
  // const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true)
    }, 1000)
  }, [])
  //portfolio/portfolio-optimizer
  return (
    <section className="relative min-w-screen min-h-screen flex justify-center  overflow-auto">
      <header
        dir="rtl"
        className=" w-full h-[44px]  absolute   flex-row justify-around  items-center text-[#f5f5f7] bg-[#000000cc] md:flex hidden z-30"
      >
        <div className=" flex flex-row gap-10">
          <div className="cursor-pointer opacity-80 hover:opacity-100">
            <Link href="/portfolio/portfolio-analyzer">
              <a> تحلیلگر سبد دارایی</a>
            </Link>
          </div>
          <div className="cursor-pointer opacity-80 hover:opacity-100">
            <Link href="/portfolio/portfolio-optimizer">
              <a> بیهنه ساز سبد دارایی</a>
            </Link>
          </div>
          <div className="cursor-pointer opacity-80 hover:opacity-100">
            <Link href="/analysis">
              <a>تحلیل بازار </a>
            </Link>
          </div>
          <div className="cursor-pointer opacity-80 hover:opacity-100">
            <Link href="#">
              <a> دیدبان بازار </a>
            </Link>
          </div>
          {/* <div className="cursor-pointer opacity-80 hover:opacity-100">
            <Link href="#">
              <a> حرکت نهنگ ها</a>
            </Link>
          </div> */}
          <div className="mx-[30px] cursor-pointer opacity-80 hover:opacity-100">
            <Link href="#">
              <a> ورود</a>
            </Link>
          </div>
        </div>

        <div className="h-full flex items-center">
          <Link href="/">
            <a>
              <div className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
                BitView
              </div>
            </a>
          </Link>
        </div>
      </header>
      <header
        dir="rtl"
        className=" absolute  w-full h-[44px]   flex-row justify-between  items-center text-[#f5f5f7] bg-[#000000cc] md:hidden flex px-[20px] z-20"
      >
        <div
          onClick={() => {
            dispatch(setShowDrawer(true))
          }}
          className="h-full text-white text-[30px] flex items-center cursor-pointer"
        >
          &#9776;
        </div>

        <div>
          <Link href="/">
            <a>
              <div className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
                BitView
              </div>
            </a>
          </Link>
        </div>
        {loader && (
          <div
            className={`fixed  top-0 right-0  w-full  bg-black  duration-500   ${
              showDrawer ? 'h-screen' : '-translate-y-full'
            } flex flex-col z-30   `}
          >
            <header
              dir="rtl"
              className="  w-full h-[44px]  flex flex-row justify-between  items-center text-[#f5f5f7] px-[20px]  border-b"
            >
              <div
                onClick={() => {
                  dispatch(setShowDrawer(false))
                }}
                className="h-full text-white text-[30px] flex items-center cursor-pointer"
              >
                &times;
              </div>

              <div
                onClick={() => {
                  dispatch(setShowDrawer(false))
                }}
                className=""
              >
                <Link href="/">
                  <a>
                    <div className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
                      BitView
                    </div>
                  </a>
                </Link>
              </div>
            </header>
            <div className=" flex flex-col  px-[20px] ">
              <div
                onClick={() => {
                  dispatch(setShowDrawer(false))
                }}
                className="h-[56px] flex items-center cursor-pointer  border-b "
              >
                <Link href="/portfolio/portfolio-analyzer">
                  <a>تحلیلگر سبد دارایی</a>
                </Link>
              </div>
              <div
                onClick={() => {
                  dispatch(setShowDrawer(false))
                }}
                className="h-[56px] flex items-center cursor-pointer  border-b "
              >
                <Link href="/portfolio/portfolio-optimizer">
                  <a> بیهنه ساز سبد دارایی</a>
                </Link>
              </div>
              <div
                onClick={() => {
                  dispatch(setShowDrawer(false))
                }}
                className="h-[56px] flex items-center cursor-pointer  border-b"
              >
                <Link href="/analysis">
                  <a>تحلیل بازار </a>
                </Link>
              </div>
              <div
                onClick={() => {
                  dispatch(setShowDrawer(false))
                }}
                className="h-[56px] flex items-center cursor-pointer  border-b text-gray-500"
              >
                <Link href="#">
                  <a> دیدبان بازار </a>
                </Link>
              </div>
              {/* <div
                onClick={() => {
                  dispatch(setShowDrawer(false))
                }}
                className="h-[56px] flex items-center cursor-pointer  border-b text-gray-500 "
              >
                <Link href="#">
                  <a> حرکت نهنگ ها</a>
                </Link>
              </div> */}
              <div
                onClick={() => {
                  dispatch(setShowDrawer(false))
                }}
                className="h-[56px] flex items-center cursor-pointer border-b text-gray-500"
              >
                <Link href="#">
                  <a> ورود</a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="w-full h-full flex justify-center  mx-auto container z-10 overflow-hidden">
        {children}
      </div>
    </section>
  )
}

export default DesktopLayout
