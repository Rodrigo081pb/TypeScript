import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './pages/Conta';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/conta"
            element={<Conta />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
