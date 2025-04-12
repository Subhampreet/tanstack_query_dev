import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WithoutQuery from './pages/Withoutquery.jsx';
import WithQuery from './pages/Withquery.jsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />
  },
  {
    path: '/withoutquery',
    element: <WithoutQuery />
  },
  {
    path: '/withquery',
    element: <WithQuery />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
