import React from 'react'
import CustomDialog from './CustomDialog'
import Dialog from './Dialog'

export default function WelcomeDialog() {
  // return (
  //   <Dialog>
  //       <h1>WelCome</h1>
  //       <h5>Thank you!</h5>
  //   </Dialog>
  // )

  return (
    <CustomDialog title="welcome" description="Thanks" />
  )
}


