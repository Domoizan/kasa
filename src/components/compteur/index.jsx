import { useState } from "react";

function Compteur(){

      const [count, setCount] = useState(0);
    
      function handleClick() {
        setCount(count + 1);
      }
    
      return (
        <>
        <p>You pressed me {count} times</p>
        <div onClick={handleClick}>
          You pressed me {count} times
        </div>
        </>
      );

}
export default Compteur