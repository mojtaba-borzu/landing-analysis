import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Treemap } from '@ant-design/plots'

import {
  selectTreeMapRequestResult,
  treeMap,
} from '../../app/slice/commonSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export default function DemoTreemap() {
  //instance
  const dispatch = useAppDispatch()

  //selectors
  const treeMapRequestResult = useAppSelector(selectTreeMapRequestResult)

  useEffect(() => {
    dispatch(treeMap())
  }, [])

  //   const [size, setSize] = useState<any>('')

  const data = {
    name: 'root',
    value: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      '47',
      '48',
      '49',
      '50',
    ],
    children: treeMapRequestResult?.data,
  }
  //   useEffect(() => {
  //     treeMapRequestResult.status == 'fulfilled' &&
  //       treeMapRequestResult?.data.map((item: any) =>
  //         setSize(item.value / 10000000000)
  //       )

  //     console.log(size)
  //   }, [treeMapRequestResult])
  //   console.log(
  //     treeMapRequestResult.status == 'fulfilled' &&
  //       treeMapRequestResult?.data[0].value
  //   )

  let size

  const config = {
    data,

    animate: true,
    colorField: 'price_change_percentage_24h',

    label: {
      style: {
        fontFamily: 'IRANSansWebFaNum',
      },
    },

    color: ({ price_change_percentage_24h }) => {
      if (
        price_change_percentage_24h <= 0 &&
        price_change_percentage_24h >= -3
      ) {
        return '#FD9195'
      } else if (price_change_percentage_24h <= -4.5) {
        return '#F42C2C'
      } else if (
        price_change_percentage_24h >= 0 &&
        price_change_percentage_24h <= 3
      ) {
        return '#91C893'
      } else {
        return 'green'
      }
    },
  }
  return <Treemap {...config} />
}
