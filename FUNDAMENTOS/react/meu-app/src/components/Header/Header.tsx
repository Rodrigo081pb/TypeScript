import { useContext } from 'react';
import './Header.css';
import { AppContext } from '../../App';

export const Header = () => {

  const context = useContext(AppContext)
  console.log(context)

  return (
    <header className='header'>
      <h1>Sua Plataforma</h1>
    </header>
  );
};
