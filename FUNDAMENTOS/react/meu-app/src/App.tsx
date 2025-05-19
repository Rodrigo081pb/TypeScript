import { BrowserRouter} from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './route';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <MainRoutes/>
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
