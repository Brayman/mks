import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main/main-page';
import ObjectsPage from './pages/projects/objects-page';
import Header from './components/header';
import About from './pages/about/about';
import Project from './pages/project-details/project-details';

const Route = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <Route />,
  children: [
    {
      index: true,
      element: <MainPage />
    },
    {
      path: "/company",
      element: <About />
    },
    {
      path: "/projects",
      element: <ObjectsPage />
    },
    {
      path: "/project/:id",
      element: <Project />
    }
  ]
}])






function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
