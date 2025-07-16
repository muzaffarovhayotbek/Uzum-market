import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useGlobalContext } from '../components/Context/GlobalContext';

export const useGoogle = () => {
  const { dispatch } = useGlobalContext();

  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch({ type: 'LOGIN', payload: user });
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  return { registerWithGoogle };
};
