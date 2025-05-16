import React from 'react';
import styled from 'styled-components';
import CardInfo from '../components/Card/CardInfo';

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
}

const Conta = () => {

    const [userData, setUserData] = useState<null | UserData>(null);

    return (
        <Background>
            <Card>
                <Section>
                    <CardInfo text="Informações de Acesso" />
                </Section>
                <Section>
                    <CardInfo text="Informações da Conta" />
                </Section>
            </Card>
        </Background>
    );
};

export default Conta;
