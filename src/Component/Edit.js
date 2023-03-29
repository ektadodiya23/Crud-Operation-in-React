import React, { useState, useEffect } from 'react'
import Users from './data/User';
// import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';

export default function Edit() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    

    const handleSubmit = (e) =>{
        e.preventDefault();

         let index = Users.map(function (e) {
            return e.id
        }).indexOf(id);

       let a =Users[index];

       a.Name = name ;
       a.Age = age ;

        history('/');
    }

    useEffect( ()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    } ,[])



    return (
        <div>
            <form className="d-grid gap-2" style={{ margin: "15rem" }}>

                <input type="text" className='inputBox p-1 mb-2'
                    value={name} placeholder="Enter Name"
                    required onChange={(e) => setName(e.target.value)} />

                <input type="text" className='inputBox p-1'
                    value={age} placeholder="Enter Age"
                    required onChange={(e) => setAge(e.target.value)} /> <br></br>

                <button className="btn btn-primary " onClick={(e) => handleSubmit(e)} type="submit">Update</button>

            </form>
        </div>
    )
}
