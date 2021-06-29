import { useState, useEffect, useCallback } from 'react';
import { Route, useRouteMatch, useParams } from 'react-router-dom';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../repository/quote-repository';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentList from '../comments/CommentsList';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);


  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId); // fetch all comment again
  }, [quoteId, sendRequest]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  };

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />;
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className="centered">No comments were added yet!</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {/* match.path => /quotes/:quoteId/comment */}
      {/* match.url => /quotes/q2/comment */}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
