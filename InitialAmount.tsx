//libraries
import React, { useRef, useState, useEffect } from 'react'

//icons
import Close_icon from '../../common/icons/Close_icon'

//redux
import {
  setBag,
  selectBag,
  setPercend,
  setDataBag,
  selectStep,
  setStep,
  setDataUser,
  selectAmount,
  setNameAsset,
  selectEndDate,
  selectNameBag,
  selectPercend,
  selectDataBag,
  selectDataUser,
  selectStartDate,
  setSelectedCoin,
  selectNameAsset,
  setShowModalStatus,
  selectSelectedCoin,
  selectShowModalStatus,
  selectOrderHistoryDate,
  selectAssetsListRequestResult,
  selectPortfoliOptimizationRequestResult,
  selectPrimaryAmount,
  setPrimaryAmount,
  setAmount,
  selectMonth,
  selectErrorRepeatAssetStatus,
} from '../../../app/slice/portfolioOptimizerSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import Chevron_Down_icon from '../../common/icons/Chevron_Down_icon'

const amountDefault = [
  { id: 1, value: 2, label: ' ۲ میلیون تومان' },
  { id: 2, value: 5, label: ' ۵ میلیون تومان' },
  { id: 3, value: 10, label: ' ۱۰ میلیون تومان' },
  { id: 4, value: 20, label: ' ۲۰ میلیون تومان' },
  { id: 5, value: 50, label: ' ۵۰ میلیون تومان' },
  { id: 6, value: 100, label: ' ۱۰۰ میلیون تومان' },
  { id: 7, value: 0, label: '  قیمت دلخواه را وارد نمایید ' },
]

function InitialAmount() {
  //instances
  const inputRef = useRef(null)

  //states
  const [showAmountStatus, setShowAmountStatus] = useState<boolean>(false)
  const [firstAmount, setFirstAmount] = useState<string>('')
  const [showInputStatus, setShowInputStatus] = useState<boolean>(false)

  //selectors
  const dispatch = useAppDispatch()

  const startDate = useAppSelector(selectStartDate)
  const endDate = useAppSelector(selectEndDate)
  const amount = useAppSelector(selectAmount)
  const nameBag = useAppSelector(selectNameBag)
  const nameAsset = useAppSelector(selectNameAsset)
  const percend = useAppSelector(selectPercend)
  const bag = useAppSelector(selectBag)
  const dataBag = useAppSelector(selectDataBag)
  const dataUser = useAppSelector(selectDataUser)
  const selectedCoin = useAppSelector(selectSelectedCoin)
  const showModalStatus = useAppSelector(selectShowModalStatus)
  const date = useAppSelector(selectOrderHistoryDate)
  const assetsListRequestResult = useAppSelector(selectAssetsListRequestResult)
  const month = useAppSelector(selectMonth)
  const errorRepeatAssetStatus = useAppSelector(selectErrorRepeatAssetStatus)
  const portfoliOptimizationRequestResult = useAppSelector(
    selectPortfoliOptimizationRequestResult
  )
  const step = useAppSelector(selectStep)
  const primaryAmount = useAppSelector(selectPrimaryAmount)

  selectStep

  useEffect(() => {
    showInputStatus && inputRef.current.focus()
  }, [showInputStatus])
  return (
    <div className="mt-[30px] w-full flex flex-col items-center">
      <div className="w-[350px] min-w-[256px] flex justify-end text-[#3997e9] font-medium">
        : مقدار سرمایه اولیه
      </div>
      <div
        onClick={() => {
          !showInputStatus && setShowAmountStatus(!showAmountStatus)
        }}
        className="w-[350px] min-w-[256px] h-[50px] rounded-2xl  flex items-center justify-center text-center border-2 border-[#3997e9] cursor-pointer"
      >
        {!showInputStatus && (
          <div
            className={`w-[350px] min-w-[256px] absolute px-[20px] flex justify-start items-center`}
          >
            <div
              className={`duration-500 ${
                showAmountStatus
                  ? 'rotate-180 text-[#3997e9] font-medium text-[20px]'
                  : ''
              }`}
            >
              <Chevron_Down_icon />
            </div>
          </div>
        )}
        <span dir="rtl" className="">
          {!showInputStatus && primaryAmount}
        </span>

        {showInputStatus && (
          <div className="w-full relative">
            <div className="-mt-[10px] ml-[10px] absolute text-[12px] bg-white flex justify-start items-start px-[5px] py-[2px]">
              میلیون تومان
            </div>
            <div className="absolute mt-[10px]  flex justify-end items-center px-[5px] ">
              <div
                onClick={() => {
                  setShowInputStatus(false)
                  dispatch(setAmount(''))
                }}
                className=" w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center cursor-pointer"
              >
                <Close_icon />
              </div>
            </div>
            <input
              type="text"
              ref={inputRef}
              value={Number(amount)}
              onChange={(e) => {
                let Regex = String(e.target.value).match(
                  new RegExp(/^(?!00)[0-9]{0,20}([0-9])?$/)
                )
                Regex && dispatch(setAmount(e.currentTarget.value))
              }}
              placeholder="میزان دارایی را وارد کنید"
              className="w-[346px] min-w-[254px] h-[46px] rounded-2xl px-[10px] text-center cursor-pointer outline-none"
            />
          </div>
        )}
      </div>

      <div
        className={`absolute mt-[74px] w-[350px] min-w-[256px] rounded-lg overflow-hidden flex flex-col gap-4 duration-500  ${
          showAmountStatus ? 'h-[280px] border border-[#3997e9] ' : 'h-0'
        }`}
      >
        {amountDefault.map((item: any) => (
          <div
            onClick={() => {
              if (item.id != 7) {
                dispatch(setPrimaryAmount(item.label))
                dispatch(setAmount(item.value))
              }

              setShowAmountStatus(false)
              item.id == 7 && setShowInputStatus(true)
            }}
            dir="rtl"
            key={item.id}
            className="text-center cursor-pointer"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InitialAmount
