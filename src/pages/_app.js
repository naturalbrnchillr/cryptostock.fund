import { Provider } from 'react-redux'

import store from '../redux/store'

import '../styles/normalize.css'
import '../styles/fonts.css'
import '../styles/styles.css'

import '../styles/PageLayout1.css'

import Layout from '../components/Layout'
import Page from '../components/Page'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>

        <Layout>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Layout>

      </Provider>
    </>
  )
}

export default App
