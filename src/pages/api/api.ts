import axios from "axios";
export default async function purchaseVoucher(){
    try{
        const result = await axios.post('https://rk297h1zsj.execute-api.eu-north-1.amazonaws.com/Test/{voucher+}', {
            Email: 'norbertmbafrank@gmail.com',
            GoldQuantity: 100
          },
          {headers: {'content-type': 'application/json'}});
    
        console.log(JSON.stringify(result.data) + " EHOLE");
        return result.data
    }catch(err){
        if (err instanceof Error){
            console.log(err.message)
        }
    }
}