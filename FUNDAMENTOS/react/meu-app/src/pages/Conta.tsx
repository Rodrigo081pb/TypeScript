import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardInfo from '../components/Card/CardInfo';
import { api } from '../api';
import { AppContext } from '../components/AppContext';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:black;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 40px;
  width: 90%;
  max-width: 900px;
  color: white;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Section = styled.div`
  flex: 1;
  min-width: 250px;
`;

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

const Conta = () => {

    const [userData, setUserData] = useState<null | UserData>(null);
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)


    !isLoggedIn && navigate('/')

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

    const actualData = new Date()


    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Background>
            <Card>

                {
                    userData === undefined || userData === null ?
                        (
                            <h1>Usuário não definido</h1>
                        ):
                        (
                            <>
                                <Section>
                                    <CardInfo MainContent = "Informações de Acesso"  content = {`Bem vindo ${userData?.name}`}/>
                                    <CardInfo MainContent= "Informações da Conta" content = {`Seu saldo é de R$${userData?.balance} ||  ${actualData.getDate()}/${actualData.getMonth()}/${actualData.getFullYear()} `} />
                                </Section>
                            </>
                        )
                }

            </Card>
        </Background >
    );
};

export default Conta;
