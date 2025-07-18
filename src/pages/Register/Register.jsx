import React, { useState } from 'react';
import { FaUser, FaKey } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error('Barcha maydonlarni to‘ldiring!');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Parollar mos kelmadi!');
      return;
    }

    try {
      console.log('User registered:', { username, email });
      toast.success('Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!');
      navigate('/login');
    } catch (error) {
      toast.error(error.message || 'Ro‘yxatdan o‘tishda xatolik yuz berdi!');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 p-6 overflow-auto">
      
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white text-black">
        <h2 className="text-center text-2xl font-bold mb-4">
          <h2 className=''></h2>
          Create your account
        </h2>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <label className="relative block">
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Username"
              required
              className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500"
            />
            <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </label>

          <label className="relative block">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500"
            />
            <MdOutlineMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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

          <label className="relative block">
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 rounded-md border border-gray-300 placeholder-gray-500"
            />
            <FaKey className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <button
          onClick={() =>
            toast(
              'Google orqali ro‘yxatdan o‘tish vaqtincha o‘chirib qo‘yilgan'
            )
          }
          className="w-full flex items-center justify-center gap-2 bg-black text-white p-3 rounded-md mt-4"
        >
          <FcGoogle className="w-6 h-6" /> Sign up with Google
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Already have an account?{' '}
            <a
              className="text-indigo-600 hover:text-indigo-500 font-medium"
              href="/login"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
