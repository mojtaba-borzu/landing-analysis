//libraris
import type { NextPage } from "next";
import Head from "next/head";

//components

import useDeviceDetector from "../hooks/useDeviceDetector";
import { selectScroll, setScroll, setNamePage } from "../app/slice/commonSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import Link from "next/link";
import News_icon from "../components/common/icons/News_icon";
import Portfolio_icon from "../components/common/icons/Portfolio_icon";
import Prerdiction_icon from "../components/common/icons/Prerdiction_icon";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";

const IndexPage: NextPage = () => {
  const [showHiroBox, setShowHiroBox] = useState(false);
  const [showCenterBox, setShowCenterBox] = useState(false);
  const isMobile = useDeviceDetector();
  const scroll = useAppSelector(selectScroll);
  const dispatch = useAppDispatch();

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    dispatch(setScroll(scrolled * 1000));
  };
  useEffect(() => {
    dispatch(setNamePage("landing"));
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", (e) => console.log(e));
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowHiroBox(true);
    }, 500);
  }, []);
  useEffect(() => {
    isMobile
      ? scroll >= 20 && setShowCenterBox(true)
      : scroll >= 100 && setShowCenterBox(true);

    document.getElementById("header").style.backgroundPosition = `0px ${
      window.scrollY * 0.3
    }px`;
  }, [scroll]);

  return (
    <div className=" scroll-smooth">
      <Head>
        <title>Bitview</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Free Web tutorials crypto" />
      </Head>
      <Layout>
        <section className=" relative items-center flex justify-center  overflow-hidden ">
          <div
            id="header"
            className=" w-full md:h-[1000px] h-[500px] bg-hero  bg-no-repeat bg-cover "
          >
            <svg
              className=" bottom-0 absolute overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,192L48,192C96,192,192,192,288,208C384,224,480,256,576,250.7C672,245,768,203,864,186.7C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div
            className={`container absolute mx-auto items-center flex flex-wrap duration-1000  ${
              showHiroBox
                ? "visible mt-0 opacity-100"
                : "invisible mt-[40px] opacity-10"
            }`}
          >
            <div className="w-full flex justify-center items-center  px-4">
              <div className="bg-black w-fit p-8 flex flex-col justify-center items-center bg-opacity-60 rounded-[16px] border border-white backdrop-blur-sm">
                <span className=" md:text-4xl text-xl text-white  ">
                  سرمایه گذاری هوشمند
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-48 md:mt-[110px]  relative  ">
          <div className="-mt-20 top-0 w-full absolute"></div>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div
                className={`w-11/12 md:w-6/12 lg:w-4/12 px-4 md:px-4 mr-auto ml-auto duration-1000  ${
                  showCenterBox
                    ? "visible -mt-[200px] opacity-100"
                    : "invisible  opacity-10"
                } `}
              >
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-700">
                  <img
                    alt="..."
                    src="/images/centerPng.jpeg"
                    className="w-full align-middle rounded-t-lg"
                  />

                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0  w-full block h-[95px] -top-[90px]"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current text-gray-700"
                      ></polygon>
                    </svg>
                    <h4 className="text-lg text-center font-bold text-white">
                      تحلیل ها چه می گویند ؟
                    </h4>

                    <p
                      dir="rtl"
                      className="text-md font-light mt-2 text-white "
                    >
                      رای دنبال کردن بزرگان بازار، سبد سرمایه‌گذاری شرکت‌ها و
                      صندوق‌هایی که در ارزدیجیتال سرمایه گذاری کرده‌اند می‌تواند
                      کمک زیادی به شما بکند.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div
                      className={`relative flex flex-col delay-100 duration-1000 ${
                        showCenterBox
                          ? "visible mt-4 opacity-100"
                          : "invisible  opacity-10"
                      }`}
                    >
                      <div className="px-4 py-5  flex flex-col items-end">
                        <div className="   flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white text-gray-500 px-[4px] py-[4px]">
                          <div className="w-[30px] h-[30px]">
                            <Portfolio_icon />
                          </div>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold flex flex-col items-end ">
                          Portfolio Analyzer
                          <span>تحلیلگر سبد دارایی</span>
                        </h6>
                        <p dir="rtl" className="mb-4 text-gray-500 text-right ">
                          سبد دارایی شما را را بر اساس رفتار گذشته بازار تحلیل
                          کرده و به شما نشان می‌دهیم که صندوق‌ها و موسسات بزرگ
                          روی چه ارزهایی سرمایه‌گذاری کرده‌اند
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div
                        className={`px-4 py-5  flex flex-col items-end delay-500 duration-1000 ${
                          showCenterBox
                            ? "visible mt-4 opacity-100"
                            : "invisible  opacity-10"
                        }`}
                      >
                        <div className="text-gray-500  text-ceter inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <div className="w-[30px] h-[30px]">
                            <Prerdiction_icon />
                          </div>
                        </div>

                        <h6 className="text-xl mb-1 font-semibold flex flex-col items-end ">
                          Market Watch
                          <span>دیدبان بازار </span>
                        </h6>
                        <p dir="rtl" className="mb-4 text-gray-500 text-right ">
                          پیش بینی آینده قیمت‌ها به کمک مدل‌های هوش مصنوعی کار
                          هیجان‌انگیزی به نظر می‌آید. ما این ابزار را در اختیار
                          شما قرار داده و سعی می‌کینم که هر لحظه‌ خود را بهینه
                          کنیم'
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div
                      className={`relative flex flex-col min-w-0 mt-4  delay-150 duration-1000 ${
                        showCenterBox
                          ? "visible mt-4 opacity-100"
                          : "invisible  opacity-10"
                      }`}
                    >
                      <div className="px-4 py-5  flex flex-col items-end">
                        <div className="text-gray-500   flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <div className="w-[30px] h-[30px]">
                            <News_icon />
                          </div>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold flex flex-col items-end ">
                          Market Analysis
                          <span>تحلیل لحظه‌ای بازار</span>
                        </h6>
                        <p dir="rtl" className="mb-4 text-gray-500 text-right ">
                          با دنبال کردن تحلیل‌های روزانه و هفتگی ما نگاهی همه
                          جانبه به بازار داشته باشید
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div
                        className={`px-4 py-5  flex flex-col items-end delay-500 duration-1000 ${
                          showCenterBox
                            ? "visible mt-4 opacity-100"
                            : "invisible  opacity-10"
                        }`}
                      >
                        <div className="text-gray-500  text-ceter inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <div className="w-[30px] h-[30px]">
                            <Portfolio_icon />
                          </div>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold flex flex-col items-end ">
                          Whale Tracker
                          <span>مثل نهنگ‌ها رفتار کن</span>
                        </h6>
                        <p dir="rtl" className="mb-4 text-gray-500 text-right ">
                          نهنگ‌ها در بازار نقش به سزایی دارند. خرید و فروش خود
                          را با رفتار بزرگان بازار هماهنگ کنید
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default IndexPage;
