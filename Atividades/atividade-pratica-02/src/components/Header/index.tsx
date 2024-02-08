import './styles.scss';

type HeaderProps = {
  title: string;
}

export function Header({title}: HeaderProps) {
  return(
    <div id="Header" >
      <header>
        <div>
          <h1>Painel Administrativo</h1>
          <h2>{title}</h2>
        </div>
      </header>
    </div>
  );
}