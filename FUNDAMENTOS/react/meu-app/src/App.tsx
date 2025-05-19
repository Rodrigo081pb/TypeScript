import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './pages/Conta';
import { Layout } from './components/Layout';
import ContaInfo from './pages/ContaInfo';
import { AppContextProvider } from './components/AppContext';



function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/conta/:id"
              element={<Conta />}
            />

            <Route
              path='/infoconta'
              element={<ContaInfo />}
            >
            </Route>

          </Routes>
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
