
import './App.css';
import Habit from './components/habit';

function App() {
  const name = 'sam';
  return (
    <>
      <span className='habit-name'>Reading</span>;
      <span className='habit-count'>8</span>;
      <button>
        <i class="fas fa-plus-square"></i>
      </button>
      <button>
        <i class="fas fa-minus-square"></i>
      </button>
      <button>
        <i class="fas fa-trash"></i>
      </button>
    </>
  )
}


export default App;
