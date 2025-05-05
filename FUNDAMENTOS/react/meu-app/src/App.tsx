import React from 'react';
import styled from 'styled-components';
import { Layout } from './components/Layout';
import { login } from './services/Login';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('/imgs/download (5).jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const GlassCard = styled.div`
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #fff;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  outline: none;

  ::placeholder {
    color: #ddd;
  }
`;

const Button = styled.button`
  padding: 12px;
  background: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #e3e3e3;
  }
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin-top: 10px;

  a {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
`;

function App() {
  return (
    //<Layout>
      <Background>
        <GlassCard>
          <Title>Login</Title>

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Digite seu email" />

          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" placeholder="Digite sua senha" />

          <Button onClick={login}>Entrar</Button>

          <FooterText>
            Não tem uma conta? <a>Registrar</a>
          </FooterText>
        </GlassCard>
      </Background>
    //</Layout>
  );
}

export default App;
