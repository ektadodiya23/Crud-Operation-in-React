import React  from 'react' ;
import Users from './data/User';
import {Link , useNavigate} from 'react-router-dom'

export default function Home() {

    let history = useNavigate();

    const handleEdit = (id , name , age) =>{
        localStorage.setItem('Name' ,name );
        localStorage.setItem('Age' ,age );
        localStorage.setItem('Id' , id  );
    }

  const HandleDelete = (id) =>{

     
        var index = Users.map(function(e){
            return e.id
        }).indexOf(id);

        Users.splice(index , 1);

        history('/');
  }

  return (
      <>

        <div style={{margin : "10rem"}}>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                       Users && Users.length > 0 
                       ? 
                       Users.map((item,index) =>{
                        return (
                            <tr key={index}>
                                
                               <td>{item.Name}</td> 
                               <td>{item.Age}</td>
                               <td>
                                    <Link to = {'/edit'}>
                                    <button  className="btn btn-primary " onClick={ () => handleEdit(item.id , item.Name , item.Age)}>Edit</button>
                                    </Link>
                                    <button  className="btn btn-primary ms-4" onClick={ () => HandleDelete(item.id)}>Delete</button>
                               </td>
                            </tr>
                        )
                       }) 
                       : 
                       "No Record Found !  "
                       
                    }
                </tbody>

            </table>
            <br></br>
            <Link className='d-grid gap-2' to = "/Create">
                    <button className="btn btn-primary " size= "lg">Create</button>
            </Link>

        </div>

     </>
  )
}



