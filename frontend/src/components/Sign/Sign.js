import React,{ useState } from "react";
import './Sign.css';
import axios from 'axios';


function Sign(){

        const [formName, setName] = useState("");
        const [formAge, setAge] = useState();
        const [formPhone, setPhone] = useState("");

        const[editName,setEditName] = useState("");
        const[editAge,setEditAge] = useState();
        const [editPhone,setEditPhone] = useState("");

        const [flag,setFlag] = useState(true);
        const [editRen,setEditRen] = useState(true);
        var url = `/user?name=${formName}&age=${formAge}&phone=${formPhone}`


    const handleLogin = async (e) => {

        
        setAge(Number(formAge));
    
        console.log("Login")

        
        await axios.get(url)
        .then(function(response) {

            // console.log(response.data[0].name )
            if(response.data[0].name !== ""){
                setFlag(false);
            }
            else{
                setFlag(true)
            }
        
           
        }).catch(function (error) {
            
            console.log(error);
          }).then(function(){
              
          })
          e.preventDefault();
    }
           
        const handleSubmit = async (e) => {

            e.preventDefault();
            setAge(Number(formAge));
            
            await axios.post('/user', {
                name: formName,
                age: formAge,
                phone: formPhone
            }).then((response) => { 
                alert("Thanks for registering! ") 
                console.log(response)
                 },(error) => {
                console.log(error);

            });
        }
        const handleLogout = async (e) => {

            setFlag(true);
            window.location.reload(false);
        }

        const handleDelete = async (e) => {
           

            await axios.delete(url)
            .then((response) => {
                alert("Account Deleted")
                setFlag(true);
            })
            .catch(function (error) {
            
                console.log(error);
              })
        }
       const handleEdit = async (e) => {
           setEditRen(false)
           e.preventDefault();
           
       }
       const handleEditSubmit = async (e) => {
        e.preventDefault();

        setEditAge(Number(editAge));
        
        await axios.put(url,{
            name: editName,
            age: editAge,
            phone: editPhone
        }).then((response) => { 
            alert("Edited, login again");
            setEditRen(true)

            setFlag(true) 
            console.log(flag);
            
             },(error) => {
            console.log(error);

        });
       }

        


    return (
        <div className="body">
            {flag?<div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} /><br></br>
                    <input type="number" className="input" placeholder="Age" onChange={(e)=>{setAge(e.target.value)}} /><br></br>
                    <input type="text" className="input" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}} /><br></br> <br></br>
                    <div className="btnContainer">
                        <input className="subBtn" type="submit" value="Submit" />
                        <button className="subBtn" type="button" onClick={handleLogin} >Login</button>
                        
                    </div>
                    

                    

                </form>
                
            </div>: editRen?  <div className="loginContainer"><h1>Welcome {formName}</h1><button  className="subBtn" onClick={handleLogout}>Logout</button>&nbsp;<button   className="subBtn" onClick={handleDelete}>Delete</button>&nbsp;<button   className="subBtn" onClick={handleEdit}>Edit</button></div>:
            <div>
            <div className="formContainer">
                <form onSubmit={handleEditSubmit}>
                    <input type="text" className="input" placeholder="Name" onChange={(e)=>{setEditName(e.target.value)}} /><br></br>
                    <input type="number" className="input" placeholder="Age" onChange={(e)=>{setEditAge(e.target.value)}} /><br></br>
                    <input type="text" className="input" placeholder="Phone" onChange={(e)=>{setEditPhone(e.target.value)}} /><br></br> <br></br>
                    <div className="btnContainer">
                        <input className="subBtn" type="submit" value="Edit" />
                        
                    </div>
                    

                    

                </form>
                
            </div>
            </div>}
        </div>
    )

}


export default Sign;