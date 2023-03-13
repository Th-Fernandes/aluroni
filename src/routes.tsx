import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Menu } from 'components/Menu';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('pages/Cardapio'));
const DefaultPage = lazy(() => import('components/DefaultPage'));
const Index = lazy(() => import('pages/index'));
const NotFound = lazy(() => import('pages/NotFound'));
const Dish = lazy(() => import('pages/Prato'));
const About = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path='/' element={<DefaultPage />}>
              <Route index element={<Index />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<About />} />
            </Route>
            <Route path='prato/:id' element={<Dish />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
}
