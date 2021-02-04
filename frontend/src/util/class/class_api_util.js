import axios from 'axios';

export const getClasses = () => (
  axios.get('/api/classes')
)

export const postClass = data => {
  debugger
  return (
  axios.post('/api/classes', data)
)
  }

export const showClass = id => (
  axios.get(`/api/classes/${id}`)
)

export const patchClass = (id, data) => (
  axios.patch(`/api/classes/${id}`, data)
) 

export const deleteClass = id => (
  axios.delete(`/api/classes/${id}`)
)