
'use client';

import React, { useRef, FormEvent } from 'react';
//import { useRouter } from 'next/navigation';

export default function LoginPage() {
  // const router = useRouter();
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    if (hiddenFormRef.current) {
      const hiddenForm = hiddenFormRef.current;

      const usernameInput = hiddenForm.elements.namedItem('username') as HTMLInputElement | null
      const passwordInput = hiddenForm.elements.namedItem('password') as HTMLInputElement | null
      if (usernameInput && passwordInput) {
        usernameInput.value = username;
        passwordInput.value = password
      }
      hiddenForm.submit();

      // setTimeout(() => router.push('/dashboard'), 100);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form className='flex flex-col gap-3' onSubmit={handleLogin}>
        <input name="username" type="text" autoComplete="username" placeholder='username' required />
        <input name="password" type="password" autoComplete="current-password" placeholder='password' required />
        <button type="submit">Login</button>
      </form>

      {/* Hidden form to trigger password manager */}
      <form
        ref={hiddenFormRef}
        action="/dashboard"
        method="POST"
        style={{ display: 'none' }}
      >
        <input name="username" type="text" autoComplete="username" />
        <input name="password" type="password" autoComplete="current-password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

