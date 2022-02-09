import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Line } from '@ant-design/plots'

export default function DemoLine() {
  const [data, setData] = useState([])
  const [state, setState] = useState(false)

  useEffect(() => {
    asyncFetch()
    setTimeout(() => {
      setState(true)
    }, 15000)
    state && setState(false)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setState(false)
    }, 200)
  }, [state])

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(0)} B`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 15000,
      },
    },
  }

  return !state && <Line {...config} />
}
