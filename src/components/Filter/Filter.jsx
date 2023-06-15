
import PropTypes from 'prop-types'; 
const Filter = ({handleNameInput}) => {
    
    return (
            <>
            <p>Search by name</p>
            <input type="text" name="filter" onChange={handleNameInput} />
            </>
        )
    }
    
    Filter.propTypes = {
        handleNameInput: PropTypes.func.isRequired,
    }
    
    export { Filter }
