import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Gauge } from '@ant-design/plots'

export default function DemoGauge() {
  const [percends, setPresends] = useState(0.02)
  const [decreiment, setDecreiment] = useState(false)
  useEffect(() => {
    percends <= 1 &&
      setTimeout(() => {
        setPresends(percends + 0.0009)
      }, 30)
  }, [percends])

  const config = {
    percent: percends >= 1 ? 0.75 : percends,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  }
  return <Gauge {...config} />
}
