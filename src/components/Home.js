import React from "react";
import axios from "axios";
//import e from "cors";
// import AuthenticatePage from './components/AuthenticatePage';
function Home() {
  const [token, setToken]=React.useState("");
  const [persons, setPersons] = React.useState([]);
  const [formData, setFormData] = React.useState(new FormData);

  function handleClick(e) {
    e.preventDefault();
    console.log("Hello",token);
     let requestFormData = new FormData();  
     requestFormData.append("data", `{"token" : "", "action" : "searchByDobAndPrimaryContactNumber", "data" :[{"dob":"1997-08-26", "primaryContactNumber":"9045902816"}]}`)
    setFormData({"data": `{"token" :"", "action" : "searchByDobAndPrimaryContactNumber", "data" :[{"dob":"1997-08-26", "primaryContactNumber":"9045902816"}]}`})

      // console.log(requestFormData)
    axios({
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/http://digihubdev.tatastrive.com/ssservices-v1/sservices-v1/student',
     // data: 'data:{"token" : "", "action" : "login", "data" : [{"userName":"pbssdpublicapp","password":"T@taStr1ve"}]}',
          // data:requestFormData,
          data:requestFormData,
     headers: {
       "content-type": "application/json",
        // ContentType:'text/plain',
        "Authorization": `Bearer ${token}`,
      },
    })
    .then(function (response) {
      console.log(response)
      
  
  })
  
  
  .catch(function (error) {
      console.log(error);
  });
    
    
    
    
      
  }

 
 
function login(){
  console.log("hello axios")
  let requestFormData = new FormData();  
      requestFormData.append('data','{"token" : "", "action" : "login", "data" : [{"userName":"pbssdpublicapp","password":"T@taStr1ve"}]}'); 
    
axios({
    method: 'post',
    url: 'http://digihubdev.tatastrive.com/ssservices-v1/login',
   // data: 'data:{"token" : "", "action" : "login", "data" : [{"userName":"pbssdpublicapp","password":"T@taStr1ve"}]}',
        data:requestFormData,
   headers: {
      "content-type": "application/json",
      // ContentType:'text/plain',
     // Authorization: `Bearer ${token}`,
    },
  })
.then(function (response) {
    console.log(response)
    console.log(response.data);
    console.log(response.data.data);
    // console.log(response.data.data[0]);
    let a = JSON.parse(response.data.data);
    console.log(a[0].token);
     setToken(a[0].token)
    //  console.log("token",token);

})


.catch(function (error) {
    console.log(error);
});
}
    function demo(event){
      event.preventDefault();
      console.log(event)
      //alert("hello")
      login();
    }

//   mySubmitHandler = (event) => {
//     event.preventDefault();
//     this.callme();
// }


//  function login() {
//   alert("hello login")
//   //preventDefault();
//   let requestFormData = new FormData();  
//  // requestFormData.append('data', '{"token" : "'+token+'", "action" : "'+action+'", "data" : [{"userName":"'+email+'","password":"'+password+'"}]}');
//       requestFormData.append('data','{"token" : "", "action" : "login", "data" : [{"userName":"pbssdpublicapp","password":"T@taStr1ve"}]}'); 
//  return  fetch(`http://digihubdev.tatastrive.com/ssservices-v1/login`,{
//    method: "POST",
//    body: requestFormData,
//    }).then(response => response.json()
      
//    ); 
// }
  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const person = res.data;
      console.log(person, typeof person);
      setPersons(person);
    });
  }, []);
  return (
    <div className="Home">
      {/* {JSON.stringify(persons)} */}
      Home
      <table
        border="2"
        style={{
          margin: "20px auto",
          border: "2px solid red",
          borderCollapse: "collapse",
        }}
      >
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>status</td>
        </tr>
        {persons.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          );
        })}
      </table>{" "}
      <div>
        <form type="submit">
          <div>
            <label>Date Of Birth:</label>
            <br></br>
            <input type="date"></input>
          </div>
          <div>
            <label>Phone Number:</label>
            <br></br>
            <input type="tel"></input>
          </div>
          <button
            style={{
              border: "2px solid red",
              width: "100px",
              height: "20px",
              margin: "10px auto",
            }}
            onClick={handleClick}
          >
            {" "}
            click me
            
          </button>
          <br></br>{" "}
          <button
            style={{
              border: "2px solid red",
              width: "100px",
              height: "20px",
              margin: "10px auto",
            }}
            onClick={demo}
          >
            {" "}
            LogIn
          </button>
        </form>
      </div>
      {/* <AuthenticatePage></AuthenticatePage> */}
    </div>
  );
}

export default Home;
