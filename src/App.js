import { PreviousState, ObjectUseState, ArrayUseState } from './Hooks/UseState'
import CodeSplitting from './CodeSplitting';
import USeEffectComp from './Hooks/UseEffect'

function App() {
  return (
    <div className="App">
      <USeEffectComp />
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
