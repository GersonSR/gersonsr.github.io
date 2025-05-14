import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Root, { routes } from './components/root/Root';
import HomePage from './containers/homePage/HomePage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={routes.HOME} element={<Root />}>
    <Route index element={<HomePage />}></Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
