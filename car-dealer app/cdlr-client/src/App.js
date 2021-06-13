import './App.css';
import  {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// an apollo client library that catches errors
import { onError } from '@apollo/client/link/error';
import NewVehicle from './Components/NewVehicle';
import AdminPage from './Components/Admin';


const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => alert(`Graphql error ${message}`)
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5500/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})


function App() {
  return (
  <ApolloProvider client={client}>
    {" "}
    <Router>
    <Route exact path = "/admin">
       <AdminPage />
    </Route>
    <Route exact path = "/new">
    <NewVehicle /> 
    </Route>
    </Router>
  </ApolloProvider>
  );
}

export default App;
