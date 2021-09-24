import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

/**
 * lazy loading result dynamic import, call import as a function.
 * this import will render when needed.
 * but the download can be milisecond, 
 * we need fallback ui to solve this dowloading time, 
 * so Suspense come in.
 */
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          {/* exact mean url must absolute match the case */}
          <Route path='/quotes'>
            <AllQuotes />
          </Route>

          <Route path='/new-quote'>
            <NewQuote />
          </Route>

          {/* set not found page fallback to any path doesn't match the above path*/}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
