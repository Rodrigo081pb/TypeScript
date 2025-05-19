import React, { MouseEventHandler, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { login } from '../services/Login';
import { api } from '../api';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';

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
  font-size: 1rem;
  color: #fff;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: rgba(137, 186, 206, 0.82);
  color: white;
  outline: none;

  ::placeholder {
    color: white;
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

interface UserData {
  email: string;
  password: string;
  name: string;
}

function Home() {

  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const [userData, setUserData] = useState<null | UserData>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data: any | UserData = await api;
        setUserData(data);
        alert('Informações carregadas');
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    getData();
  }, []);

  const validateUser = async (email: string) => {

    const loggedIn = await login(email)
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    

    if(!loggedIn){
      alert('Email inválido')
    }

    setIsLoggedIn(true)
    navigate('/conta/1')

  }

  return (
    <Background>
      <GlassCard>
        {userData === null && (
          <h1>Carregando informações da promise...</h1>
        )}

        <Title>Login</Title>

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Digite seu email"
        />

        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />

        <Link to='/conta/1'>
          logar
        </Link>
        <Button onClick={() => validateUser(email)}>Entrar</Button>

      </GlassCard>
    </Background>
  );
}

export default Home;
