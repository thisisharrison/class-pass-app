export const getClassArray = obj => (
  Object.keys(obj).map(key => obj[key])
)

// access from state or return empty object
export const selectClass = ({ entities: { classes } }, id ) => {
  return classes.all[id] || {}
}

export const selectClassTimes = ({ entities: { classTimes } }, id) => {
  return classTimes.all[id] || [];
}

export const getUserBookings = state => (
  state.session.user.bookings || []
) 

export const getUserSaves = state => (
  state.session.user.saves || []
) 