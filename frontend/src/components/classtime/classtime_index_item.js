import moment from 'moment';

const ClassTimeIndexItem = ({classTime, isEdit}) => {
  let { startTime, endTime } = classTime;
  startTime = moment.unix(startTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
  endTime = moment.unix(endTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
  const editButtons = isEdit ? 
    (<ul>
      <li>Edit</li>
      <li>Remove</li>
    </ul>) : ''

  return (
    <div>
      <p>Starts: {startTime}</p>
      <p>Ends: {endTime}</p>
      {editButtons}
    </div>
  )
}

export default ClassTimeIndexItem;