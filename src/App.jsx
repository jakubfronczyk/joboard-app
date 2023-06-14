import './App.css';
import { Container } from './components/Container/Container';
import FilterContainer from './components/FilterContainer';

import Jobs from './components/Jobs';

function App() {
   return (
      <Container>
         <FilterContainer />
         <Jobs />
      </Container>
   );
}

export default App;
