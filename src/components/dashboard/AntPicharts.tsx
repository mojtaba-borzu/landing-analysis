import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Pie } from '@ant-design/plots'

export default function DemoPie() {
  const data = [
    {
      type: 'BTC',
      value: 27,
    },
    {
      type: 'ETH',
      value: 25,
    },
    {
      type: 'BNB',
      value: 18,
    },
    {
      type: 'SHIB',
      value: 15,
    },
    {
      type: 'SOL',
      value: 10,
    },
    {
      type: 'ALP',
      value: 5,
    },
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'AntV\nBitView',
      },
    },
  }
  return <Pie {...config} />
}
