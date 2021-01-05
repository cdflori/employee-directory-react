import { Component } from 'react';
import UserTable from './UserTable';
import Nav from './Nav';
import API from '../utils/API';

// import '../styles/UserData'

class UserData extends Component {
    state={
        users: [{}],
        order: 'descend',
        filteredUsers: [{}]
    }

    headings = [
        {
            name: 'Name',
            width: '10%'
        },
        {
            name: 'Phone',
            width: '10%'
        },
        {
            name: 'Email',
            width: '20%'
        },
        {
            name: 'Image',
            width: '10%'
        }
    ]

    // this will handle the sorting toggle between ascend and descend on users name

    handleSort= heading => {
        if (this.state.order === 'descend') {
            this.setState({
                order: 'ascend'
            })
        } else {
            this.setState({
                order: 'descend'
            })
        }

    

    // sorting users in display table  with (a b) variable functions

    const sortUser = (a, b) => {

        if (this.state.order === 'ascend') {
            if (a[heading] === undefined) {
                return 1;

            } else if (b[heading] === undefined) {
                return -1;

            } else if (heading === 'name') {
            //calling the localeCompare method to return the first reference number in the user heading array for ascending order
                return a[heading].first.localeCompare(b[heading.first]);
            } else {
                return a[heading] - b[heading];
            }

        } else {

            if (a[heading] === undefined) {
                return 1;
             } else if (b[heading] === undefined) {
                 return -1;

             } else if 
                 (heading === 'name') {
            //calling the localeCompare method to return the first reference number in the user heading array for descending order      
                     return b[heading].first.localeCompare(a[heading].first);
                 } else {
                     return b[heading] - a[heading];
                 }
             }
            }
            const sortedUsers = this.state.filteredUsers.sort(sortUser);
            this.setState({ filteredUsers: sortedUsers });
}

handleSearchChange = e => {
const filter = e.target.value;
const list = this.state.users.filter(item => {

    let display = Object.display(item).join('').toLowerCase();

    return display.indexOf(filter.toLowerCase()) !== -1;
});

this.setState({ filteredUsers: list });
// console.log(e.target.value); 
}

componentDidMount() {
    API.getUsers().then(results => {
        this.setState({

            users: results.data.results,
            filteredUsers: results.data.results
        });
    });
}

render() {
    return (
        <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className='user-data'>
            {/* <DataTable
                headings={this.headings}
                users={this.state.filteredUsers}
                handleSort={this.handleSort}
                /> */}
        </div>
        </>
    )
}


}