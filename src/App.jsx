import './App.css';
import { Container } from './components/Container/Container';
import Filters from './components/Filters';
import Jobs from './components/Jobs';

function App() {
   return (
      <Container>
         <Filters />
         <Jobs />
      </Container>
   );
}

export default App;
