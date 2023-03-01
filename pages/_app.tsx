import { ToastContainer } from "react-toastify";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import Layout from "components/Layout";
import Wallet from "components/wallet/Wallet";
import "../styles/styles.css";

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  return (
    <Wallet>
      <WalletModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer style={{ fontSize: 15 }} pauseOnFocusLoss={false} />
      </WalletModalProvider>
    </Wallet>
  );
}

export default MyApp;
