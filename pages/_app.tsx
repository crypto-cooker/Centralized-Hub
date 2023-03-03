import { ToastContainer } from "react-toastify";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import Layout from "components/Layout";
import Wallet from "components/wallet/Wallet";
import "../styles/styles.css";
import { MainContextProvider } from "contexts";

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  return (
    <Wallet>
      <WalletModalProvider>
        <MainContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainContextProvider>
        <ToastContainer style={{ fontSize: 15 }} pauseOnFocusLoss={false} />
      </WalletModalProvider>
    </Wallet>
  );
}

export default MyApp;
