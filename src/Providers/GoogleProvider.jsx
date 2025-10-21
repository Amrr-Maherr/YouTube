import { GoogleOAuthProvider } from "@react-oauth/google";
function GoogleProvider({ children }) {
  return (
    <GoogleOAuthProvider clientId="781039895680-ndqutnjd5894u1v5tu079a66ngk8uetc.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
}

export default GoogleProvider;
