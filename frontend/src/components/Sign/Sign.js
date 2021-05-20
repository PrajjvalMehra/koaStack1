import React,{ useState } from "react";
import './Sign.css';
import axios from 'axios';


function Sign(){

        const [formName, setName] = useState("");
        const [formAge, setAge] = useState();
        const [formPhone, setPhone] = useState("");

    

        const handleSubmit = async (e) => {

            e.preventDefault();
            setAge(Number(formAge));
           
            
          

           await axios.post('/user', {
                name: formName,
                age: formAge,
                phone: formPhone
            }).then((response) => { console.log(response); },(error) => {
                console.log(error);

            })

            
           
            
            
        };
        


    return (
        <div className="body">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} /><br></br>
                    <input type="number" className="input" placeholder="Age" onChange={(e)=>{setAge(e.target.value)}} /><br></br>
                    <input type="text" className="input" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}} /><br></br> <br></br>
                    <div className="btnContainer">
                        <input className="subBtn" type="submit" value="Submit" />
                    </div>



                </form>
            </div>
        </div>
    )

}


export default Sign;