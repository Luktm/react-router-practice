import React, { useEffect, Fragment } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../repository/quote-repository';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const QuoteDetail = React.lazy(() => import('../pages/QuoteDetail'));

const AllQuote = (props) => {

    const match = useRouteMatch();

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes);

    console.log({ loadedQuotes });

    /**
     * this always run initially
     */
    useEffect(() => {
        console.log('ALL QUOTE RUNNING');
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending' || loadedQuotes === null) {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    };

    if (error) {
        return (
            <p className="centered focused">
                {error}
            </p>
        );
    };

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return (
        <Fragment>
            <Switch>
                <Route path={`${match.path}/:quoteId`}>
                    <QuoteDetail />
                </Route>
                <Route path={match.path} >
                    <QuoteList quotes={loadedQuotes} />
                </Route>
            </Switch>
        </Fragment>
    );
}

export default AllQuote;