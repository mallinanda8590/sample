import React from 'react';
import axios from "axios"
function Home() {
  

   const [persons, setPersons] = React.useState([]);

   function handleClick(e) {
    e.preventDefault();
    console.log("Hello")
    const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNdXJhbGlBQENMIiwiaWF0IjoxNjIxMjUyNzAyLCJleHAiOjE2MjEyNTYzMDJ9.4a0zhF4aqYcFkz4yTo_AaVBGkj3HVTKOjv7EAmKmc_FxB5Dn7P4NpJjvzoFKZZAi4PzQ9rktP7IbNr0Iv0Xv7g \\';
    console.log("token",token)
    const params = JSON.stringify({
        "dob": '1997-08-26',
        "primaryContactNumber": '9045902816',
        });
         console.log("params",params)
    axios.post('https://cors-anywhere.herokuapp.com/http://digihubdev.tatastrive.com/ssservices-v1/sservices-v1/student',params,{
      "headers":{
        "content-type": "application/json",
       // ContentType:'text/plain',
        'Authorization':`Bearer ${token}` ,
        
      },
     }
    )
    .then(res => {
        console.log("Hello res")
        const datalist = res.data;
        console.log(datalist, typeof(datalist))
       // setPersons(person);
    })
    
  }

  function login(e) {
    e.preventDefault();
    let data=   JSON.stringify( {"token" : "",
     "action" : "login",
     //data : [{"userName":"pbssdpublicapp","password":"T@taStr1ve"}]
})
    console.log("Hello")
    const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNdXJhbGlBQENMIiwiaWF0IjoxNjIxMjUyNzAyLCJleHAiOjE2MjEyNTYzMDJ9.4a0zhF4aqYcFkz4yTo_AaVBGkj3HVTKOjv7EAmKmc_FxB5Dn7P4NpJjvzoFKZZAi4PzQ9rktP7IbNr0Iv0Xv7g \\';
    console.log("token",token)
    
         console.log("params",data)
    axios.post('http://digihubdev.tatastrive.com/ssservices-v1/login',{
      headers:{
       "content-type": "multipart/form-data",
       //'Access-Control-Allow-Origin':true,
       // ContentType:'text/plain',
       // 'Authorization':`Bearer ${token}` , 
        
      },
     
        data : data,
     }
    )
    .then(res => {
        console.log("Hello res",res)
        const datalist = res.data;
        console.log( "response",res.status)
       // setPersons(person);
    })
    .catch(error => {
        console.log("error",error)
      if (!error.response) {
          // network error
        
           console.log("if error", error)
      } else {
        //  this.errorStatus = error.response.data.message;
          console.log("else error", error)
      }
    })
    
  }

    React.useEffect(() => {

        
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const person = res.data;
            console.log(person, typeof(person))
            setPersons(person);
        })
        
    }, [])
    return (
      <div className="Home">
        
        {/* {JSON.stringify(persons)} */}
        Home
        <table border="2" style={{margin: "20px auto",border:"2px solid red", borderCollapse:"collapse"}}>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>status</td>
                        </tr>
        {
            persons.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.website}</td>
                    </tr>
                )
            })
        }
    </table>      <div>
    <form type="submit">
                 <div>
                 <label >Date Of Birth:</label><br></br>
                     <input type="date" ></input>
                 </div>
                 <div>
                 <label >Phone Number:</label><br></br>
                     <input type="tel" ></input>
                 </div>
                 <button style={{border:"2px solid red", width:"100px", height:"20px", margin:"10px auto"}}  onClick={handleClick}> click me</button>
                 <button style={{border:"2px solid red", width:"100px", height:"20px", margin:"10px auto"}}  onClick={login}> click me</button>

                 </form>
</div>

              </div>
    );
  }

  export default Home