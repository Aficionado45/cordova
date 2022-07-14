import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  return (
    <Auth0Provider
      domain="dev-z313-qbx.us.auth0.com"
      clientId="xrGshabZtBaDtQxkwGsx6A43A2Fa4P9Q"
      redirectUri={window.location.origin}
    >
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Auth 2.0 Authentication</p>
        {!isAuthenticated && (
          <button onClick={loginWithPopup}>Login with Popup</button>
        )}
        {!isAuthenticated && (
          <button onClick={loginWithRedirect}>Login with Redirect</button>
        )}
        { isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}
        {isAuthenticated && (
          <pre style={{ textAlign: "center" }}>
            {JSON.stringify(user, null, 2)}
          </pre>
        )}
        {isAuthenticated && <button onClick={logout}>Logout</button>}
      </header>
    </div>
    </Auth0Provider>
  );
}

export default App;
