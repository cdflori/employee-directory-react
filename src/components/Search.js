import React from 'react';

function Search({ handleSearchChange }) {
    return (
        <div className='searchbox'>
            <form className='form-inline align-center'>
                <input 
                className='form-control align-center' type='search' placeholder='Search for Employees' onChange={(e) => handleSearchChange(e)}
                />
            </form>
        </div>
    );
}

export default Search;