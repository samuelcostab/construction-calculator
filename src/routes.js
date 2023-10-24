import {
    createBrowserRouter,
  } from 'react-router-dom';
  import App from './App';
  import ErrorPage from './views/ErroPage';
  import Home from './views/home/Home';
  import OrcamentoView from './views/orcamento/OrcamentoView';
  
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/orcamento',
          element: <OrcamentoView />
        },
      ]
    }
  ]);

  export default router;