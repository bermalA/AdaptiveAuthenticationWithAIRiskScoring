'use client';
import '../global.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleLogin } from '../_hooks/handleLogin';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const onLoginClick = async () => {
    try {
      setLoading(true); // Start loading
      const result = await handleLogin(email, password);

      if (result) {
        const prediction = result.prediction;
        console.log('Prediction Result:', prediction);

        // Only navigate to the dashboard if prediction is >= 0.7
        if (prediction >= 0.7) {
          console.log('Login Successful: Navigating to dashboard');
          router.push('/dashboard');
        } else if (prediction < 0.4) {
          alert('Access Denied: Suspicious activity detected.');
        } else {
          alert('Warning: Your login looks unusual. Proceed with caution.');
          router.push('/dashboard');
        }
      }
    } catch (error) {
      console.error('Login failed: ', error.message);
      alert(`Login failed: ${error.message}`);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="card glass">
      <p className="w-full text-xl self-start text-slate-900 border-b-[1px] border-neutral-600">
        Login
      </p>
      <input
        className="p-2 border rounded-md"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password" // Secure password input
        className="p-2 border rounded-md"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={onLoginClick}
        className="self-end btn btn-teal"
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default LoginCard;
