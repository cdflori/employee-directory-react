import React from 'react';

function Search({ handleSearchChange }) {
    return (
        <div className='searchbox'>
            <form className='form-inline'>
                <input 
                className='form-control' type='search' placeholder='Search for Employees' onChange={(e) => handleSearchChange}
                />
                </form>
        </div>
    );
}

export default Search;