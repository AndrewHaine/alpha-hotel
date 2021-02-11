import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '../components/layouts/Layout'
import '../styles/index.scss'

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </QueryClientProvider>
  )
}

export default App
