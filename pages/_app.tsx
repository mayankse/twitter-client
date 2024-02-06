import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Inter,Quicksand } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const quickSand=Quicksand({subsets:["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
  <GoogleOAuthProvider clientId="732246577840-3lkvjp4d6iclls81bov6vkgflsg64qc5.apps.googleusercontent.com">
    <Component {...pageProps} />
    </GoogleOAuthProvider>
    </div>
}
