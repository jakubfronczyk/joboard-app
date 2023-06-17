import './App.css';
import { Container } from './components/Container/Container';
import { QueryClient, QueryClientProvider } from 'react-query';
import JobContainer from './components/JobContainer';
import FiltersContainer from './components/FilterContainer';

const queryClient = new QueryClient();

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <Container>
            <FiltersContainer />
            <JobContainer />
         </Container>
      </QueryClientProvider>
   );
}

export default App;
