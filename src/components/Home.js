import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Home extends Component {
    state = {
        users: [ ]
    }
    componentDidMount(){
        axios.get('https://reqres.in/api/users/')
            .then(res => {
                this.setState({
                    users: res.data.data
                })
            })
    }
    render() {
        const { users } = this.state;
        const userList = users.length ? (
            users.map(user => {
                return(
                    <div className='post card' key={user.id}>
                        <div className='card-content'>
                        <Link to={'/' + user.id} >
                            <span className='card-title blue-text'>{user.first_name} {user.last_name}</span>
                        </Link>
                        <img src={user.avatar} alt='Display picture'></img>
                        </div>
                    </div> 
                )
            })
        ) : (
            <div className='center'> No users yet </div>
        )

        return ( 
            <div className='container home'>
                <h3 className='center'>Home</h3>
                {userList}
            </div>
         );
    }
    
}
 
export default Home;