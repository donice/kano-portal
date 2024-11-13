import React from 'react'
import Image from 'next/image'
import Logo from "@/public/logo.png"
import AbiaStatelogo from "@/public/logo.png"
import LogoWhite from "@/public/logo.png"
import EnumerartionLogo from "@/public/logo.png"

export const MainLogo = () => {
  return (
    <div>
      <Image src={Logo} alt="Kano Portal Logo" width={100} loading='eager' priority={true}/>
    </div>
  )
}
export const MainSmallLogo = () => {
  return (
    <div>
      <Image src={Logo} alt="Kano Portal Logo" width={40} loading='eager' priority={true}/>
    </div>
  )
}

export const AbiaStateLogo = () => {
  return (
    <div>
      <Image src={AbiaStatelogo} alt="Kano Portal Logo" width={70} loading='eager' priority={true}/>
    </div>
  )
}
export const AbiaLogoWhite = () => {
  return (
    <div>
      <Image src={LogoWhite} alt="Kano Portal Logo" width={100} loading='eager' priority={true}/>
    </div>
  )
}

export const AbiaLogoLarge = () => {
  return (
    <div>
      <Image src={Logo} alt="Kano Portal Logo" width={150} loading='eager' priority={true}/>
    </div>
  )
}

export const AbiaEnumerationLarge = () => {
  return (
    <div>
      <Image src={EnumerartionLogo} alt="Kano Portal Logo" width={75} loading='eager' priority={true}/>
    </div>
  )
}
