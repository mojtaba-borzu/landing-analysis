import React from 'react'
import ForgetPassword from '../../components/forget-password/ForgetPassword'
import ResetPasssword from '../../components/forget-password/ResetPasssword'
import NewPassword from '../../components/forget-password/NewPassword'

import DesktopLayout from '../../layout/DesktopLayout'

//redux
import { selectStep } from '../../app/slice/forgetPasswordSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Layout from '../../layout/Layout'

function index() {
  const step = useAppSelector(selectStep)

  return (
    <Layout>
      {step == 1 && <ForgetPassword />}
      {step == 2 && <ResetPasssword />}
      {step == 3 && <NewPassword />}
    </Layout>
  )
}

export default index
