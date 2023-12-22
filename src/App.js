import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import RoundSelection from './components/RoundSelection';
import QuestionSelection from './components/QuestionSelection';
import Question from './components/Question';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/rounds" element={<RoundSelection />} />
        <Route path="/questions" element={<QuestionSelection />} />
        <Route path="/questions/:number" element={<Question />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <div className="bg-amber-100">
      <Outlet />
    </div>
  );
}

export default App;
