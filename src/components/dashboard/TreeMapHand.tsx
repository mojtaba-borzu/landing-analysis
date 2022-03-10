import React from 'react'

function TreeMapHand() {
  return (
    <div>
      <div className="w-full h-full flex flex-row items-center">
        <div
          style={{ width: '10%' }}
          className=" h-[500px] bg-green-200 flex flex-col items-center"
        >
          <div style={{ height: '70%' }} className="w-full  bg-blue-400"></div>
          <div
            style={{ height: '30%' }}
            className="w-full  bg-orange-400"
          ></div>
        </div>
        <div style={{ width: '90%' }} className=" h-[500px] bg-red-50"></div>
      </div>
    </div>
  )
}

export default TreeMapHand
