import React, { useEffect } from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import DesktopLayout from '../../layout/DesktopLayout'
import Layout from '../../layout/Layout'

//redux
import { selectNamePage, setNamePage } from '../../app/slice/commonSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

function index() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNamePage('dashboard'))
  }, [])
  return (
    <Layout>
      {/* <div className="w-full h-full flex justify-center items-center">
        <img src="/images/repiar.png" className="rounded-2xl" />
      </div> */}
      <Dashboard />
    </Layout>
  )
}

export default index
