import Layout from '../components/Layout/Layout';
import { TerminalCommandsContextProvider } from '../helpers/context/terminal-commands-context';
import  '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  return(
    <TerminalCommandsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TerminalCommandsContextProvider>
  )
}

export default MyApp
