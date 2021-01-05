import React from 'react';
// import '../styles/Table';
import UserData from './UserData';

function table ({ headings, users, handleSort }) {
    return (
        <div className='table mt-5'>
            <table id='table' className='table'>
                <header>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th className= 'col' key = {name} style={{width}} onClick ={()=> {
                                    handleSort(name.toLowerCase());
                                }}> {name} <span className='pointer'></span>

                                </th>
                            )
                        })}
                    </tr>
                </header>
                <UserData users={users} />        
            </table>
        </div>
    )
}

export default table;