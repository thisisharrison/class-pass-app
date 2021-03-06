import { 
  getAllClassTimes,
  getClassTimes,
  postClassTime,
  patchClassTime,
  deleteClassTime
} from '../util/classtime_api_util';

export const RECEIVE_CLASSTIMES = 'RECEIVE_CLASSTIMES';
export const RECEIVE_NEW_CLASSTIME = 'RECEIVE_NEW_CLASSTIME';
export const REMOVE_CLASSTIME = 'REMOVE_CLASSTIME'
export const EDIT_CLASSTIME = 'EDIT_CLASSTIME'
export const RECEIVE_UPDATE_CLASSTIME = 'RECEIVE_UPDATE_CLASSTIME';
export const RECEIVE_CLASSTIME_ERORRS = 'RECEIVE_CLASSTIME_ERORRS';

export const receiveClassTimes = classTimes => ({
  type: RECEIVE_CLASSTIMES,
  classTimes
});

export const receiveNewClassTime = classTime => ({
  type: RECEIVE_NEW_CLASSTIME,
  classTime
});

// Remove classTime from state
export const removeClassTime = classTime => ({
  type: REMOVE_CLASSTIME,
  classTime
})

export const editClassTime = classTime => ({
  type: EDIT_CLASSTIME,
  classTime
})

export const receiveUpdateClassTime = classTime => ({
  type: RECEIVE_UPDATE_CLASSTIME,
  classTime
})

export const receiveClassTimeErrors = errors => ({
  type: RECEIVE_CLASSTIME_ERORRS,
  errors
})

// query all classtimes
export const fetchAllClassTimes = () => dispatch => (
  getAllClassTimes()
    .then(classTimes => dispatch(receiveClassTimes(classTimes)))
    .catch(err => dispatch(receiveClassTimeErrors(err.response.data)))
);

// frontend pass classId to fetch class's class times
export const fetchClassTimes = classId => dispatch => (
  getClassTimes(classId)
    .then(classTimes => dispatch(receiveClassTimes(classTimes)))
    .catch(err => dispatch(receiveClassTimeErrors(err.response.data)))
);

// frontend pass classId and data
// post class time data
export const createClassTime = (classId, data) => dispatch => (
  postClassTime(classId, data)
    .then(classTime => dispatch(receiveNewClassTime(classTime)))
    .catch(err => dispatch(receiveClassTimeErrors(err.response.data)))
)

// Remove class time from backend and state
export const destroyClassTime = id => dispatch => (
  deleteClassTime(id)
    .then(classTime => dispatch(removeClassTime(classTime)))
    .catch(err => dispatch(receiveClassTimeErrors(err.response.data)))
)

export const updateClassTime = (id, data) => dispatch => (
  patchClassTime(id, data)
    .then(classTime => dispatch(receiveUpdateClassTime(classTime)))
    .catch(err => dispatch(receiveClassTimeErrors(err.response.data)))
)