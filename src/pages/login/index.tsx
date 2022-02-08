//libraries
import React, { useEffect } from 'react'

//components
import Login from '../../components/login/Login'

//layout
import Layout from '../../layout/Layout'

//redux
import { selectNamePage, setNamePage } from '../../app/slice/commonSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

function index() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNamePage('login'))
  }, [])
  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export default index
