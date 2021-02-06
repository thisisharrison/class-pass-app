import { connect } from 'react-redux';
import { destroyBooking, destroySave, newBooking, newSave, fetchSaves } from '../../actions/dashboard_actions';
import SaveToggle from './save_toggle'

const mapStateToProps = (state, ownProps) => ({
  saved: ownProps.saved,
  classId: ownProps.classId
})

const mapDispatchToProps = dispatch => ({
  newSave: (classId) => dispatch(newSave(classId)),
  destroySave: (classId) => dispatch(destroySave(classId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveToggle)