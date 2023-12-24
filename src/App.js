import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import RoundSelection from './components/RoundSelection';
import QuestionSelection from './components/QuestionSelection';
import Question from './components/Question';
import { useEffect, useState } from 'react';

const App = () => {
  const currentGameIndex = 1;
  const SELECTED_QUESTIONS = "selectedQuestions";

  const games = ["सेमी फाइनल - १", "सेमी फाइनल - २", "फाइनल"];
  const questions = require(`./data/questions_set_${currentGameIndex}.json`);

  const [currentQuestionSet, setCurrentQuestionSet] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const [selectedQuestions, setSelectedQuestions] = useState(() => {
    const storedValue = localStorage.getItem(SELECTED_QUESTIONS);
    return storedValue ? JSON.parse(storedValue) : {}
  });

  useEffect(() => {
    localStorage.setItem(SELECTED_QUESTIONS, JSON.stringify(selectedQuestions));
  }, [selectedQuestions]);

  const addSelected = (round, questionNumber) => {
    // Create a copy of the current state
    const newSelectedQuestions = selectedQuestions;

    // Check if the roundNumber exists in the state
    if (!newSelectedQuestions[round]) {
      newSelectedQuestions[round] = [];
    }

    // Push selected question number
    if (!newSelectedQuestions[round].includes(questionNumber)) {
      newSelectedQuestions[round].push(questionNumber);
      // Update the state
      setSelectedQuestions(newSelectedQuestions);
    }
  }

  const clearLocalStorage = () => {
    // Remove a specific item from localStorage
    localStorage.removeItem(SELECTED_QUESTIONS);
    setSelectedQuestions({});
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home clearLocalStorage={clearLocalStorage} />} />
        <Route path="/rounds" element={
          <RoundSelection
            currentGameName={games[currentGameIndex - 1]}
            questions={questions}
            setCurrentQuestionSet={setCurrentQuestionSet}
          />}
        />
        <Route path="/rounds/:round/questions" element={
          <QuestionSelection
            currentQuestionSet={currentQuestionSet}
            setCurrentQuestion={setCurrentQuestion}
            selectedQuestions={selectedQuestions}
            addSelected={addSelected}
          />}
        />
        <Route path="/rounds/:round/questions/:number" element={<Question currentQuestion={currentQuestion} />} />
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
