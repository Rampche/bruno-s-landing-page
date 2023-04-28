import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import About from '../pages/About';
import ActivityField from '../pages/activityField/ActivityField';
import Error from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/info',
        element: <ActivityField />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
