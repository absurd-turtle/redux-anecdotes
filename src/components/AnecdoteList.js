import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}


const AnecdoteList = () => {
  const anecdotes = Object.values(useSelector(state => state.anecdotes))
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(setNotification('voted for anecdote: ' + anecdote.content))
    setTimeout(() => {
      dispatch(setNotification(null))
    }, 5000)
  }

  return <div>
    {anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={
            () => vote(anecdote)
          }
        />
      )}
  </div>
}

export default AnecdoteList
