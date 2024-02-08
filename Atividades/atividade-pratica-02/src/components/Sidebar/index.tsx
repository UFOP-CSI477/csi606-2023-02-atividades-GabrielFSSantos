import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

import logo from '../../assets/logo.png'

type SidebarProps = {
  children?: ReactNode;
}

export function Sidebar({children}: SidebarProps) {
  const navigate = useNavigate();

  async function handleToHome() {
    navigate('/');
  }

  async function handleToPessoa() {
    navigate('/pessoas');
  }

  async function handleToDoacao() {
    navigate('/doacoes');
  }

  async function handleToLocaiColeta() {
    navigate('/locaisColeta');
  }

  async function handleToTipoSanguineo() {
    navigate('/tiposSanguineos');
  }

  return(
    <div id="sidebar" >
      <aside>
        <img src={logo} alt="Logo" onClick={handleToHome}/>
        <div className="list">
          <span onClick={handleToPessoa}>Pessoas</span>
          <span onClick={handleToDoacao}>Doações</span>
          <span onClick={handleToLocaiColeta}>Locais de Coleta</span>
          <span onClick={handleToTipoSanguineo}>Tipos Sanguineos</span>
        </div>
      </aside>
      <section>
        {children}
      </section>
    </div>
  );
}