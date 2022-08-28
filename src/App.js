import UserEffectComp from './components/UseEffectComp_BKP'
import UseContextComp from './components/UseEffectComp'
import { AuthContextProvider } from './components/UseEffectComp/contextStore/authContext'
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <UseContextComp />
      </AuthContextProvider>
    </div>
  );
}

export default App;
