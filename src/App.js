import { PreviousState, ObjectUseState, ArrayUseState } from './Hooks/UseState'
import CodeSplitting from './CodeSplitting';
import UseCallbackCmp from './Hooks/UseCallback'

function App() {
  return (
    <div className="App">
      <UseCallbackCmp />
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
