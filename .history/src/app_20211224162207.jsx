
import './App.css';

function App() {
  const name = 'sam';
  return (

    <>
      {name && <h1 className='title'>Hello {name}</h1>}
      {
        ['🎈', '🎆','🧨'].map((item) => <h1>{item}</h1>)
      }
    </>
  );
}

export default App;
