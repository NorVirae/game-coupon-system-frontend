import { Dispatch, SetStateAction, useState } from "react";
import { PaystackButton } from "react-paystack";


interface GoldCardInterface {
    coupon:string,
    setCoupon:Dispatch<SetStateAction<string>>
}
export default function EoiGoldCard({coupon, setCoupon}:GoldCardInterface){
    return (
        <div className="eoi-gold-card">
            <div className="eoi-gold-card-img-container">
                <img src="/images/goldCoin.jpg" className="eoi-gold-card-img"/>
            </div>
            <div className="eoi-gold-card-body">
                <h3>100 GOLD - 4000 naira</h3>
                <PaystackButton publicKey="hshs"
                    email ="norbertmbafrank@gmail.com"
                    amount={4000000} text="Buy Gold Coupon" 
                    className="eoi-gold-action-btn"
                    onSuccess={() => {
                        setCoupon("3453-5433-432")
                    }} />
                
            </div>
        </div>
    )
}