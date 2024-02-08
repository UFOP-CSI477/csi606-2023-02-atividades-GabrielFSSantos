import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

import { Home } from './pages/Home';
import { ReadAndExcludePessoa } from './pages/ReadAndExcludePessoas';
import { RegisterAndEditPessoas } from './pages/RegisterAndEditPessoas';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/pessoas" Component={ReadAndExcludePessoa}/>
          <Route path="/create/pessoa" Component={RegisterAndEditPessoas}/>
          <Route path="/edit/pessoa" Component={RegisterAndEditPessoas}/>

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
