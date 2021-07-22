import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
// import { getParkings } from '../../actions'

function Navbar() {

    const [ location, setLocation ] = useState("");


    function handleChange(e) {
        setLocation(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(location);
        setLocation("");
    }

    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Navbar</a>
                <form onSubmit={handleSubmit} class="d-flex input-group w-auto">
                <input
                    onChange={handleChange}
                    value={location}
                    type="search"
                    className="form-control rounded"
                    placeholder="Search location.."
                    aria-label="Search"
                    aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
