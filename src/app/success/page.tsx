'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Success = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (sessionId) {
      // Optionally, you can verify the session_id with your backend or Stripe
      setMessage('Payment was successful! Thank you for your purchase.');
    }
  }, [sessionId]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        {message ? (
          <h1 className="text-2xl font-bold text-green-600">{message}</h1>
        ) : (
          <h1 className="text-2xl font-bold">Processing your payment...</h1>
        )}
      </div>
    </div>
  );
};

export default Success;
