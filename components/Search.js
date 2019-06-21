import { useState } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { changeSearch } from '../components/actions/pageAction'

const Search = (props) => {
    const [search, setSearch] = useState('tech')

    const inputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.changeSearch(search)
    }
    return (
        <form className="form-inline my-2 my-lg-0" onSubmit = {handleSubmit}>
            <input className="form-control mr-sm-2" type="text" placeholder={props.search} onChange={inputChange} />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

Search.Proptypes = {
    changeSearch: Proptypes.func.isRequired,
    search: Proptypes.string.isRequired
}

const mapStateToProps = state => ({
    search: state.page.search
})

export default connect(mapStateToProps, { changeSearch })(Search)

