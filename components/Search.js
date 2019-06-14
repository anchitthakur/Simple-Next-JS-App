import { useState } from 'react'


const Search = (props) => {
    const [search, setSearch] = useState('tech')

    const inputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.submitInput(search)
    }
    return (
        <form className="form-inline my-2 my-lg-0" onSubmit = {handleSubmit}>
            <input className="form-control mr-sm-2" type="text" placeholder={search} onChange={inputChange} />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

export default Search
