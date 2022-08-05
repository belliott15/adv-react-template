import { useAuth } from "../../state/hooks/userAuth";


export default function AuthForm() {
  const { signIn, signUp } = useAuth();
  return (
    <div>Auth</div>
  );
}
