import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { MenuMenu, MenuItem, Menu, Container} from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

 function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut(params) {
    setIsAuthenticated(false);

  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            {isAuthenticated ? <SignedIn signOut = {handleSignOut}/> : <SignedOut signIn={handleSignIn} />}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
export default Navi
