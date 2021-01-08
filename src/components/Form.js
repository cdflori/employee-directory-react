import React from 'react';

function formData({ users }) {

    return(

        <tbody className= 'table table-dark'>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(
                    ({ userName, name, picture, phone, email}) => {
                        return (
                            <tr key={userName}>
                                <td className='align-middle'>
                                {name.first} {name.last}
                            </td>
                            <td className='align-middle'>
                                {phone}
                            </td>
                            <td className='align-middle'>
                                <a href={'contact by email at' + email} target='_blank'>
                                {email}
                                </a>
                            </td>
                            <td className='align-middle'>
                                <img className="img-responsive" src={picture.medium} alt={"profile image for user"} />
                            </td>
                            
                            </tr>
                            

                        );
                    }
                )
            ) : (<></>)}
        </tbody>
        
    )

}

export default formData;