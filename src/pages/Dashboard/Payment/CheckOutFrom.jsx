/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useProduct from "../../../hooks/useProduct";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const CheckOutFrom = ({singleData}) => {
   
    const [error, setError] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    const [transectionId,setTransectionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    // const [product] = useProduct();
    const { user} = useContext(AuthContext);
 
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: singleData.productcost })
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure])

    const hundleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log('Payment error', error);
            setError(error.message)
        } else {
            console.log('Payment method', paymentMethod);
            setError('');
        }
        // confirm payment 
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method : {
                card : card,
                billing_details: {
                    email : user?.email || 'anonymous',
                    name : user?.displayName || 'anonymous',
                }

            }
        })
        if(confirmError){
            console.log('confirm Error')
        }
        else{
            console.log('Payment Intenent',paymentIntent)
            if(paymentIntent.status === "succeeded"){

                    


                toast.success('Successfully Payment!')
                setTransectionId(paymentIntent.id)
            }
        }

    }
    return (
        <div>
            <form onSubmit={hundleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-accent ml-5 my-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-lg font-semibold text-center text-red-500">{error}</p>
                {
                    transectionId && <p className="text-lg font-semibold text-center text-green-500"> <span className="text-lg font-semibold text-center text-black">Your transectionID : </span>
                    {transectionId}</p>
                }
                
            </form>
        </div>
    );
};

export default CheckOutFrom;