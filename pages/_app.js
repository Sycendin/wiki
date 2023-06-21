import "../styles/globals.css";
import "bulma/css/bulma.min.css";

import { UserProvider } from "../contexts/UserContext";
import { CharProvider } from "../contexts/CharContext";
import { ProfileProvider } from "../contexts/ProfileContext";
import { ProfileImageModalProvider } from "../contexts/ProfileImageContext";
import { VisitProvider } from "../contexts/VisitContext";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <UserProvider>
      <VisitProvider>
        <ProfileProvider>
          <ProfileImageModalProvider>
            <CharProvider>
              <Component {...pageProps} key={router.asPath} />
            </CharProvider>
          </ProfileImageModalProvider>
        </ProfileProvider>
      </VisitProvider>
    </UserProvider>
  );
}

export default MyApp;
