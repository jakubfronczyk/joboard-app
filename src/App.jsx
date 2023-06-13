import './App.css';
import { Container } from './components/Container/Container';
import { QueryClient, QueryClientProvider } from 'react-query';
import Filters from './components/Filters';
import JobContainer from './components/JobContainer';
import JobOfferList from './components/JobsOfferList';

const queryClient = new QueryClient();

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <Container>
            <Filters />
            <JobContainer />
            <JobOfferList />
         </Container>
      </QueryClientProvider>
   );
}

export default App;
