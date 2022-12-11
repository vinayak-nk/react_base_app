import { PreviousState, ObjectUseState, ArrayUseState } from './Hooks/UseState'
import CodeSplitting from './CodeSplitting';
import CustomHooks from './Hooks/CustomHooks'

function App() {
  return (
    <div className="App">
      <CustomHooks />
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
