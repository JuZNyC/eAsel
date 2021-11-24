import { Button } from '@material-ui/core'
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton(){
  const { loginWithPopup } = useAuth0();
  return <Button onClick={loginWithPopup}>Log In</Button>;
};