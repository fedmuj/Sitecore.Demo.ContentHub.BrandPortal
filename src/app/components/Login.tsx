'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react'; // Import useState
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState(''); // State to store the email

  // Function to update the email state
  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
  };

  // Modified login function
  const handleLogin = async (event:any) => {
    event.preventDefault(); // Prevent form submission

    // Redirect based on the email value
    if (email === 'user@attica.com') {
      router.push('/brands/Demo.BrandGuideline.attica');
    } else if (email === 'user@Camper.com') {
      router.push('/brands/Demo.BrandGuideline.Camper');
    } else {
      // Redirect to a generic page if the email doesn't match specific cases
      router.push('/brands/Demo.BrandGuideline.Zara');
    }
  };

  return (
    <section className="w-full py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none">
              Welcome Back!
            </h1>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="grid gap-4" onSubmit={handleLogin}>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="email@example.com"
                  type="email"
                  value={email} // Use the state for the input value
                  onChange={handleEmailChange} // Update the state on input change
                />
              </div>
              <div className="grid gap-1.5">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" passHref className="text-sm underline">
                    Forgot Password
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full" type="submit">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}