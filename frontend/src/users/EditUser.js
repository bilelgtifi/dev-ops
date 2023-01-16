import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate();
    const {id}=useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate('/');
    }

    const loadUser =async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 
                            offset-md-3 border rounded p-4
                            mt-2 shadow' >
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form  onSubmit={(e)=> onSubmit(e)} >
                        <div className='mb-3'>
                            <input type={"text"} className="form-control"
                                placeholder='Enter Your Username'
                                name='username' id='Username'
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <input type={"text"} className="form-control"
                                placeholder='Enter Your Name'
                                name='name' id='Name'
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <input type={"text"} className="form-control"
                                placeholder='Enter Your Email'
                                name='email' id='Email'
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type='submit' className='btn btn-outline-primary'>Save</button>
                        <Link className='btn btn-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
