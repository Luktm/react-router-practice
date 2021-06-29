import { Fragment } from 'react';
// useHistory allow use change page
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  
  // navigator.push()
  const history = useHistory();
  // useLocation() give us access to a location object which has information about currently loaded URL
  const location = useLocation();

  /**
 * {pathname: "/quotes", search: "?sort=asc", hash: "", state: undefined, key: "suvd5k"}
 */
  // console.log({location});

  /**
   * build in browser class extract current ?sort= query parameter by key,
   * queryParams has "search: "?sort=asc"
   * example: https://stackoverflow.com/questions/48606857/how-to-read-all-url-params-using-js?answertab=votes#tab-top
   * 
   */
  const queryParams = new URLSearchParams(location.search);
  // console.log({"queryParams": queryParams.getAll('sort')}); // return ['sort']

  // bcuz current param has "search: "?sort=asc", isSortingAscending will store "asc" value
  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // alternative way and concise way, push will re-render the code!!
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
    
    // // push this page render component even we were at the current page
    // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Decending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
