import Image from 'next/image'
import { Inter } from 'next/font/google'
import EoiGoldCard from '@/components/card/EoiGoldCard'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [coupon, setCoupon] = useState("")

  return (
    <div className='eoi-coupon-system'>
      <div className='eoi-text-header-container'>
        <h2>EOI Coupon System </h2>

        <h1> BUY Gold and get a Coupon for redeeming</h1>
      </div>
      
        <div className='coupon-container'>
          {coupon && "Coupon Will appear here"}
        </div>
      <div className='eoi-body-inner'>
        <EoiGoldCard coupon={coupon} setCoupon={setCoupon}/>
      </div>
    </div>
  )
}
