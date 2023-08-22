import purchaseVoucher from "@/pages/api/api";
import { Dispatch, SetStateAction, useState } from "react";
import { PaystackButton } from "react-paystack";


interface GoldCardInterface {
    coupon:string,
    setCoupon:Dispatch<SetStateAction<string>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>
}
export default function EoiGoldCard({coupon, setCoupon, setIsLoading}:GoldCardInterface){
    
    return (
        <div className="eoi-gold-card">
            <div className="eoi-gold-card-img-container">
                <img src="/images/goldCoin.jpg" className="eoi-gold-card-img"/>
            </div>
            <div className="eoi-gold-card-body">
                <h3>100 GOLD - 4000 naira</h3>
                <PaystackButton publicKey="pk_test_c0198a35cd0526b34365d6241d8c218fa33db418"
                    email ="norbertmbafrank@gmail.com"
                    amount={400000} text="Buy Gold Coupon" 
                    className="eoi-gold-action-btn"
                    onSuccess={() => {
                        setIsLoading(true)
                        setCoupon("3453-5433-432")
                        purchaseVoucher().then(res => {
                            setIsLoading(false)
                            setCoupon(res.VoucherCode)

                        }).catch(err => {
                            setIsLoading(false)

                        });
                    }} />
                
            </div>
        </div>
    )
}