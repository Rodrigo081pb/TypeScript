import React from 'react'
import styled from 'styled-components'
import { Layout } from './components/Layout';

/* 

- O uso do styled components é muito bom para aplicação
  partindo do principio que podemos usar ele como variável para determinar alguma tag
  como mostrado abaixo

  Uso de uma constante que leva o nome de box
  onde eu chamo o styled e depois passo a tag e logo em seguida uso ` ` para poder declarar
  os estilos.

  logo em seguia chamo a variável através da tag como podem ver,
  chamei de Box e envolvi ela visto que ela é uma div.

  Isso é aplicado para muitas coisas e podem ser muito versátil

*/

const Box = styled.div`
  background-color: orange
`

function App() {
  return (

    <Layout>
      <Box>
        <h1>Faça o login</h1>
        <label htmlFor="emailInput">
          Email
        </label>

        <input type="email" />

        <label htmlFor="passwordInput">
          Senha
        </label>

        <input type="password"/>

        <button>
          Entrar
        </button>
      </Box>
    </Layout>

  );
}

export default App;
