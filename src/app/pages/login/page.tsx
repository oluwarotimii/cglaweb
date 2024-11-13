// app/login/page.tsx (if using app directory)
// or
// pages/login.tsx (if using pages directory)

'use client';

import React from 'react';
import { LoginForm } from '@/app/components/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
