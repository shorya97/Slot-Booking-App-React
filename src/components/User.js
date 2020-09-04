import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

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
                <p>FIRST NAME : {this.state.user.first_name}</p>
                <p>LAST NAME : {this.state.user.last_name}</p>
                <p>EMAIL : {this.state.user.email}</p>
                <Link><NavLink to='/bookings'>BOOK A SLOT</NavLink></Link>
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

