import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCombobox } from 'downshift';
import { Input } from 'antd';

const Home = () => {
    const [ users, setUsers ] = useState([]);
    const [ inputItems, setInputItems ] = useState([]);
    
    useEffect(()=>{
        axios.get('https://reqres.in/api/users/')
            .then(res => {
                setUsers(res.data.data)
                setInputItems(res.data.data)
                console.log(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const {
        getMenuProps,
        getInputProps,
        getComboboxProps,
    } = useCombobox({
        items: users ,
        onInputValueChange: ({inputValue}) => {
            setInputItems(
                users.filter((item) =>
                    item.first_name.toLowerCase().startsWith(inputValue.toLowerCase()) ||
                    item.last_name.toLowerCase().startsWith(inputValue.toLowerCase()))              
            )
        }
    })

    return (
        <div className='container'>
            <h3 className='center'>Home</h3>
            <div className='input-field col s12' {...getComboboxProps()}>
                <Input 
                    {...getInputProps()}
                    placeholder="Enter your search keyword"
                    enterButton="Search"
                    size="large"
                />
            </div>
            <ul {...getMenuProps()}>
                {
                    inputItems.map((item,index) => (
                        <div className='post card' key={item.id}>
                            <div className='card-content'>
                            <Link to={'/' + item.id} >
                                <span className='card-title red-text'>{item.first_name} {item.last_name}</span>
                            </Link>
                            <img src={item.avatar} alt='img'></img>
                            </div>
                        </div>
                        )
                    )
                }
            </ul>
        </div>
     )
}
export default Home;

