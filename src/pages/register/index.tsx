//libraries
import React, { useEffect } from 'react'

//components
import Register from '../../components/register/Register'

//layout
import Layout from '../../layout/Layout'

//redux
import { selectNamePage, setNamePage } from '../../app/slice/commonSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

function index() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNamePage('register'))
  }, [])
  return (
    <Layout>
      <Register />
    </Layout>
  )
}

export default index
