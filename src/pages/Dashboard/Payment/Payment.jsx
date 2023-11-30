import {loadStripe} from '@stripe/stripe-js';
import {
    Elements,
  } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';
import { useLoaderData } from 'react-router-dom';


const Payment = () => {


    const singleData = useLoaderData();
    

    // to do add publishable key...
    const stripePromise = loadStripe('pk_test_51OHqEmDpwvXMxr6QFyo994ibm6EulZR9BA5EA7i7jfM0RAsoRoX6YniDVoolyuDgL03e4dAEQNIbkB6Y8liTWIiN003r2KD5zS');

    return (
        <div>
            <h2 className="text-center my-10 text-3xl font-bold">Payment System Method</h2>

            <Elements stripe={stripePromise}>
                <CheckOutFrom singleData = {singleData}></CheckOutFrom>
            </Elements>
            
        </div>
    );
};

export default Payment;