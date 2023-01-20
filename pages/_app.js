import "../styles/globals.css";
import "bulma/css/bulma.min.css";
import { UserProvider } from "../contexts/UserContext";
import { CharProvider } from "../contexts/CharContext";
import { ProfileProvider } from "../contexts/ProfileContext";
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ProfileProvider>
        <CharProvider>
          <Component {...pageProps} />
        </CharProvider>
      </ProfileProvider>
    </UserProvider>
  );
}

export default MyApp;
