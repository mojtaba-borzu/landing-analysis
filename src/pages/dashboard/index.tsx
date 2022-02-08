import React, { useEffect } from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import DesktopLayout from '../../layout/DesktopLayout'
import Layout from '../../layout/Layout'
import Head from 'next/head'

//redux
import { selectNamePage, setNamePage } from '../../app/slice/commonSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

function index() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNamePage('dashboard'))
  }, [])
  return (
    <>
      <Head>
        <title>Bitview</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Free Web tutorials crypto" />
      </Head>
      <Layout>
        {/* <div className="w-full h-full flex justify-center items-center">
        <img src="/images/repiar.png" className="rounded-2xl" />
      </div> */}
        <Dashboard />
      </Layout>
    </>
  )
}

export default index
