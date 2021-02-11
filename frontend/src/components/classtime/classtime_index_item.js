import moment from 'moment';
import BookContainer from '../toggles/book_container';

// These should be handled separately
// isEdit, destroyClassTime, updateClassTime, editClassTime

const ClassTimeIndexItem = ({ classTime, isEdit, fetchClassTimes, destroyClassTime, updateClassTime, editClassTime }) => {
  
  let { startTime, endTime } = classTime;

  startTime = moment.unix(startTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
  endTime = moment.unix(endTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
  const editButtons = isEdit ? 
    (<ul>
      <button
        onClick={() => editClassTime(classTime)}>
        Edit
      </button>
      <button 
        onClick={() => destroyClassTime(classTime._id) }
      >Remove</button>
    </ul>) : ''

  return (
    <div>
      {classTime.class ? <p>{classTime.class.name}</p> : ''}
      {classTime.class ? <p>{classTime.class.description}</p> : ''}
      <p>Starts: {startTime}</p>
      <p>Ends: {endTime}</p>
      { isEdit ? editButtons : <BookContainer classTimeId={classTime._id} /> }
    </div>
  )
}

export default ClassTimeIndexItem;