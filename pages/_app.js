import '../styles/globals.css';
import { Provider } from 'next-auth/client';
// import { useUser } from '../context/Auth';

function MyApp({ Component, pageProps }) {
  // const user = useUser();
  const { session } = pageProps;

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
