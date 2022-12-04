import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import App from './Components/HocExample/App';
// import App from './Components/ErrorBoundary/AppComp';
// import App from './Components/RenderProps/App';
import App from './App'
// import App from './Components/UseMemoExample/App'
// import ProblemUseMemo from './Components/UseMemoExample/Problem_UseMemo'
// import SolutionUseMemo from './Components/UseMemoExample/Solution_UseMemo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
