import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Components
import Nav from './components/Nav';

// Pages
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Detail from './pages/Detail';
import OrderHistory from './pages/OrderHistory';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h1>REACT APP</h1>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/orderHistory" element={OrderHistory} />
            <Route exact path="/products/:id" element={<Detail />} />
            <Route component={NoMatch} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;