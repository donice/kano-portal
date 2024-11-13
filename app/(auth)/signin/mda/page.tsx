import MDASigninComponent from '@/src/components/modules/signin/mda';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Sigin to Agents Portal",
  description: "Kano State for Agents Portal Dashboard",
};

const MDASignInPage = () => {
  return (
    <div>
      <MDASigninComponent />
    </div>
  )
}

export default MDASignInPage