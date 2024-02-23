import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../shared/Layout/Layout.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const RentACar = lazy(() => import('../pages/RentACar/RentACarPage.jsx'));
const FavoritePage = lazy(() => import('../pages/Favorite/FavoritePage.jsx'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<RentACar />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
