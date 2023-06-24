import React, {useState} from "react";
import Form from "./Form";

const Parent = () => {

    let [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
       <div>
        <h1>Parent Component</h1>
          <div>
              {!isLoggedIn &&
                <Form state={setIsLoggedIn} />}
          </div>

          <div>
              {isLoggedIn &&
              <p>You are logged in!</p>}
          </div>
       </div>
    );
}

export default Parent