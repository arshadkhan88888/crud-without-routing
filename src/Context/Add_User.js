import React, {useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { contxt } from './ContextGlobal';

const Add_User = () => {
    const [data1,setData1]=useState([])
    const {addUser}=useContext(contxt)
    let history=useHistory()

    const handleChange=(e)=>{
        let key=e.target.id;
        let val=e.target.value;
        setData1({
            id:Date.now(),
            ...data1,[key]:val
        })
    }

    const handleClick=()=>{
        console.log(data1);
       addUser(data1)
        history.push('/')
    }

    return (
        <div>
            <h1>Add User</h1>
            <label>Name</label>
            <input type='text' placeholder="Name" id="name" onChange={handleChange}/><hr/><br/><br/>
            <label>phone</label>
            <input type='number' placeholder="Phone" id="phone" onChange={handleChange}/><hr/><br/><br/>
            <label>City</label>
            <input type='text' placeholder="City" id="city" onChange={handleChange}/><hr/><br/><br/>
            <button  className='btn btn-primary' onClick={handleClick}>ADD</button>
        </div>
    );
};

export default Add_User;