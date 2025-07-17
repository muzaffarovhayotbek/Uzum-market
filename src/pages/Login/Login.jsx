import React, { useState } from 'react';
import { CgMail } from 'react-icons/cg';
import { FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Iltimos, email va parolni kiriting!');
      return;
    }

    try {
      console.log('Logged in with:', { email, password });
      toast.success('Muvaffaqiyatli tizimga kirdingiz!');
      navigate('/');
    } catch (error) {
      toast.error('Login xatosi: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 p-6">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white text-black">
        <h2 className="text-center text-2xl font-bold mb-4">
          Sign in to your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="relative block">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500"
            />
            <CgMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </label>

          <label className="relative block">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500"
            />
            <FaKey className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={() =>
              toast('Google orqali kirish vaqtincha o‘chirib qo‘yilgan')
            }
            className="w-full flex items-center justify-center gap-2 bg-black text-white p-3 rounded-md hover:bg-gray-800 transition cursor-pointer"
          >
            <span>Sign in with Google</span>
          </button>
        </form>

       
      </div>
    </div>
  );
}

export default Login;
