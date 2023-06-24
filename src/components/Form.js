import React, {useState} from "react";

const Form = ({state}) => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    return (
       <form>
          <p>
             <label htmlFor="username">Username: </label>
             <input
                onChange={(e) => {
                   if (e.target.value.trim() != "") {
                      setUsername(e.target.value.trim());
                   }
                }}
                type="text"
                id="username"
             />
          </p>

          <p>
             <label htmlFor="password">Password: </label>
             <input
                onChange={(e) => {
                   if (e.target.value.trim() != "") {
                      setPassword(e.target.value.trim());
                   }
                }}
                type="password"
                id="password"
             />
          </p>

          <button onClick={(e)=>{
            e.preventDefault()
            if(username && password){
                state(true)
            }
          }}>Log in</button>
       </form>
    );
}

export default Form