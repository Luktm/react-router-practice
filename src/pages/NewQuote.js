import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../repository/quote-repository';

const NewQuote = (props) => {

    // * inside has state reducer, if it get update, the component will re-render
    // addQuote is a function, sendRequest is a function,
    // * trigger useHttp function, return the sendRequest without trigger it,
    // * then sendRequest(form_object) trigger, then trigger addQuote(form_object)
    const { sendRequest, status } = useHttp(addQuote);

    /**
     * * useHistory is programmatic navigation, when use finish certain action, navigate away the page
     * * tell React Router that we wanna switch pages
     */
    const history = useHistory(); // it change the browser history

    // * dispatch reducer state change in useHttp, useEffect will call
    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [status, history]);

    const addQuoteHandler = async (quoteData) => {
        console.log(quoteData);

        await sendRequest(quoteData);

        // * like Navigator.push() and Navigator.replace() in flutter
        history.push('/quotes');
    };

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    );
}

export default NewQuote;