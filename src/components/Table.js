import React from 'react';


function TableDisplay ({ headings, handleSort, users }) {
    return (
        <div className='table mt-5'>
            <table id='table' className='table'>
                <thead>
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
                </thead> 
                <tbody>
                    {users.map(user => {
                        return (
                            <tr>
                                <th>{user.name !== undefined ? user.name.first : ""}</th> 
                                <th>{user.phone}</th>
                                <th>{user.email}</th>
                                <th>
                                    <img src={user.picture !== undefined ? user.picture.medium : ""}/>
                                </th>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableDisplay;