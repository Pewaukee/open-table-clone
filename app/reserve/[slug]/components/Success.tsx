'use client';

import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Success() {

  const router = useRouter();

  useEffect(() => {
    const redirect = () => {
      const timeout = setTimeout(() => {
        router.push('/');
      }, 3000);
      return () => clearTimeout(timeout);
    };
    redirect();
  }, []);

  const [time, setTime] = useState(3);

  useEffect(() => {
    if (time > 0) {
      const timeout = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timeout);
    }
  });

  return (
    <>
      <Alert severity="success">
        Your reservation has been booked! Redirecting to home page in {time} seconds...
      </Alert>
    </>
  );
}
