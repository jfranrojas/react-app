import './App.css';
import ItemCount from './components/ItemListContainer/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
   <>
   <NavBar />
   <ItemListContainer greeting="React App"/>
   </> 
  )
  }
export default App;

