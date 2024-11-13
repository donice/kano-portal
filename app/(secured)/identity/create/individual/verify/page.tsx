import VerifyComponent from '@/src/components/modules/identity/create/individual/verify'
import { Metadata } from 'next/types';
import React from 'react'

export const metadata: Metadata = {
  title: "Create ABSSIN",
  description: "Create ABSSIN",
};

const VerifyPage = () => {
  return (
    <div><VerifyComponent /></div>
  )
}

export default VerifyPage