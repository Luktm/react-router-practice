import React, { Component, Fragment, useEffect } from 'react';
import { useParams, Route, useRouteMatch, Switch, Link } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../repository/quote-repository';
import LoadingSpinner from '../components/UI/LoadingSpinner';


const QuoteDetail = (props) => {

    let match = useRouteMatch()
    const params = useParams();

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])


    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    // fallback, if user simply type the :quoteId
    if (error) {
        return (
            <p className="centered">{error}</p>
        );
    };

    if (!loadedQuotes) {
        return <p>No Quote found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;