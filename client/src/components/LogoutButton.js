import { Button } from '@material-ui/core'
import { useAuth0 } from "@auth0/auth0-react";

export default function SignoutButton(){
  const { logout } = useAuth0();
  return <Button onClick={logout}>Log Out</Button>;
};