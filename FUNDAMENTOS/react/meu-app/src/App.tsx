import React from 'react'
import { Card } from "./components/Card";
import { Layout } from './components/Layout';

function App() {
  return (

    <Layout>

      Hello World

      <Card
        id={1}
        paragrafo='Náutico é o primeiro time nordestino ao ganhar um Mundial'
        details='Kieza teve uma noite diferente dentro dos estádio dos aflitos'
      />

      <Card
        id={2}
        paragrafo='Rodrigo é indiciado por ter a mulher mais linda do brasil'
        details='Conheça o homem que tem a mulher mais linda do universo'
      />

    </Layout>

  );
}

export default App;
