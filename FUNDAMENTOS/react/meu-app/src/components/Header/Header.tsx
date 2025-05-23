import { useContext } from 'react';
import './Header.css';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-title">Rodrigo</h1>
      </div>
      {
        isLoggedIn && (
          <>
            <div className="header-right">
              <button className="logout-button" onClick={logout}>
                SAIR
              </button>
            </div>
          </>
        )
      }
    </div>
  );
};
