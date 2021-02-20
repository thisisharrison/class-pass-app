import ClassIndexContainer from '../class/class_index_container';
import FilterForm from './filter_form'
import { Container } from '@material-ui/core'

const Search = ({
  // classes, 
  filters,
  updateFilter,
  updateFilterParams,
  fetchSaves,
  fetchBookings,
  fetchClasses, 
  fetchAllClassTimes,
  isAuthenticated
  }) => (
  <div>
    <Container maxwidth="sm">
    <FilterForm 
      filters={filters}
      updateFilter={updateFilter}
      updateFilterParams={updateFilterParams}
      fetchClasses={fetchClasses}
      fetchAllClassTimes={fetchAllClassTimes}
      fetchSaves={fetchSaves}
      fetchBookings={fetchBookings}
      isAuthenticated={isAuthenticated}
    />
    <ClassIndexContainer />
    </Container>
  </div>
)

export default Search;