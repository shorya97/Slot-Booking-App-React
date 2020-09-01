import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    state={
        user: null
    }
    componentDidMount(){
        let id = this.props.match.params.user_id;
        axios.get('https://reqres.in/api/users/' + id)
            .then(res => {
                this.setState({
                    user: res.data.data
                })
            })
    }
    render() { 

        const user = this.state.user ? (
            <div className='user'>
                <h4 className='center'>{this.state.user.first_name} {this.state.user.last_name}</h4>
                <p>First Name : {this.state.user.first_name}</p>
                <p>Last Name : {this.state.user.last_name}</p>
                <p>Email : {this.state.user.email}</p>


            </div>
        ) : (
            <div className='center'>Loading User...</div>
        )

        return (
            <div className='container'>
                <h5> { user } </h5>
            </div>
        )
    }
}
 
export default User;

