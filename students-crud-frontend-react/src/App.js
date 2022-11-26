import './App.css';
import MyProvider from './context/MyProvider';
import AppRouter from './router/AppRouter';

function App() {

   
  return (
    <div className="App">
      <MyProvider>
        <AppRouter/>
      </MyProvider>
    </div>
  );
}

export  default App;


