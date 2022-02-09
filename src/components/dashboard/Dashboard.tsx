import React, { useEffect, useState } from 'react'
import LineChart from './LineCharts'
import BarCharts from './BarCharts'
import AntPicharts from './AntPicharts'
import Linechart from './Linechart'
import TreeMap from './TreeMap'
import Gauge from './Gauge'

const hiroBox = [
  { id: 1, label: 'BTC', value: '$53,000', percend: '+5%', icons: '' },
  { id: 2, label: 'BTC', value: '$53,000', percend: '+5%', icons: '' },
  { id: 3, label: 'BTC', value: '$53,000', percend: '+5%', icons: '' },
  { id: 4, label: 'BTC', value: '$53,000', percend: '+5%', icons: '' },
]

const data: any = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF1042']

function Dashboard() {
  return (
    <div className="w-full h-full  rounded-[16px] flex justify-center items-center  mx-auto container  py-[20px] ">
      <div className="w-full h-full  max-auto container flex flex-col gap-6">
        <div className="mt-[50px] w-full  hidden md:flex flex-wrap justify-center items-center gap-4">
          {hiroBox.map((item: any, index: any) => (
            <div
              key={index}
              className="w-[300px] h-[80px] bg-white rounded-lg flex justify-between shadow-xl"
            >
              <div className="flex flex-col items-start p-[10px] justify-center">
                <div className="text-[18px] font-medium">{item.label}</div>
                <div className="flex flex-row items-center gap-2">
                  <div className="text-[18px] font-medium text-gray-600">
                    {item.value}
                  </div>
                  <div>{item.percend}</div>
                </div>
              </div>
              <div className="p-[10px] flex items-center justify-end">
                <div className="w-[50px] h-[50px] bg-blue-400 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:mt-[0px] mt-[50px] flex md:flex-row flex-col items-center gap-4 px-[20px]">
          <div className="md:w-5/12 w-full h-[400px] bg-white rounded-xl shadow-xl">
            <div className="w-full flex flex-col gap-4 py-[30px] ">
              {data.map((item: any, index: any) => (
                <div
                  key={index}
                  className="w-full flex flex-row justify-end  bg-white rounded-xl px-[30px] py-[5px] "
                >
                  <div className="w-full flex flex-row pb-[6px] pt-[15px] justify-between border-b-[1px] border-gray-600">
                    <div className="w-full h-full flex justify-start gap-32 ">
                      <div
                        dir="rtl"
                        className=" bg-white  rounded-xl flex items-center "
                      >{`${item.value} میلیون تومان`}</div>
                      <div className="bg-white  rounded-xl flex items-center ">
                        {`${item.name}`}
                        <div
                          style={{ backgroundColor: `${COLORS[index]}` }}
                          className="w-[16px] h-[16px] rounded-full ml-[10px] "
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-7/12 w-full h-[400px] bg-white rounded-xl shadow-xl">
            <AntPicharts />
          </div>
        </div>
        <div className="w-full  flex md:flex-row flex-col items-center gap-4 px-[20px]">
          <div className="md:w-1/2 w-full h-[400px] bg-white rounded-xl shadow-xl">
            <BarCharts />
          </div>
          <div className="md:w-1/2 w-full h-[400px] bg-white rounded-xl shadow-xl">
            <LineChart />
          </div>
        </div>
        <div className="w-full  flex md:flex-row flex-col items-center gap-4 px-[20px]">
          <div
            dir="rtl"
            className=" w-full h-[500px] bg-white rounded-xl shadow-xl  "
          >
            <Gauge />
          </div>
        </div>
        <div className="w-full  flex md:flex-row flex-col items-center gap-4 ">
          <div
            dir="rtl"
            className=" w-full h-[500px] bg-white rounded-xl shadow-xl  "
          >
            <Linechart />
          </div>
        </div>

        <div className="w-full   items-center gap-4 px-[24px] ">
          <div
            dir="rtl"
            className=" w-full h-[1000px] bg-white rounded-xl shadow-xl  "
          >
            <TreeMap />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
