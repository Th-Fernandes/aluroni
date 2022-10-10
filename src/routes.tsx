import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/index';
import { Sobre } from 'pages/Sobre';

import  DefaultPage  from 'components/DefaultPage';
import { Menu } from 'components/Menu';
import { Footer } from 'components/Footer';
import NotFound from 'pages/NotFound';
import { Prato } from 'pages/Prato';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre/>}/>
          </Route>
          <Route path="prato/:id" element={<Prato/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </main>
  );
}