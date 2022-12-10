import { PreviousState, ObjectUseState, ArrayUseState } from './Hooks/UseState'
import CodeSplitting from './CodeSplitting';
import UseReducerCmp from './Hooks/UseReducer'

function App() {
  return (
    <div className="App">
      <UseReducerCmp />
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <PreviousState />
//       <hr />
//       <ObjectUseState />
//       <hr />
//       <ArrayUseState />
//     </div>
//   );
// }

export default App;
