import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { Sobre } from 'pages/Sobre';

import  DefaultPage  from 'components/DefaultPage';
import { Menu } from 'components/Menu';
import { Footer } from 'components/Footer';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='/sobre' element={<Sobre/>}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}