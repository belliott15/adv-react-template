import { Link, Route, Routes } from 'react-router-dom';
import useForm from '../../state/hooks/formData';
import { useAuth } from '../../state/hooks/userAuth';
import  { FormButton, InputControl } from '../Forms/FormControls';
import styles from './Auth.css';

function AuthForm({ header, button, link, message, onSubmit }) {
  const [credentials, handleChange] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };
  
  return (
    <section className={styles.Auth}>
      <form onSubmit={handleSubmit}>
        <h1>{header}</h1>

        <InputControl 
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={credentials.email}
          onChange={handleChange}
        />

        <InputControl 
          lable="Password"
          name="password"
          type="password"
          placeholder="Password"
          required
          value={credentials.password}
          onChange={handleChange}
        />

        <FormButton>{button}</FormButton>

        <Link to={link}>{message}</Link>
      </form>
    </section>
  );
}

export default function Auth(){
  const { signIn, signUp } = useAuth();

  const signInInfo = {
    header: 'Please Sign In',
    button: 'Sign-In', 
    link: 'sign-up',
    message: 'Already have an account?', 
    onSubmit: signIn 
  };

  const signUpInfo = {
    header: 'Create a new Account',
    button: 'Sign-Up', 
    link: '../',
    message: 'Need a new account?', 
    onSubmit: signUp 
  };

  return (
    <Routes>
      <Route index element={<AuthForm {...signInInfo} />}/>
      <Route path="sign-up" element={<AuthForm {...signUpInfo} />}/>
    </Routes>
  );
}
