import { Link } from 'react-router-dom';

const signedOut = () => {


    return ( 
        <div>
            <h3>Signed Out</h3>
            <br/>
            <Link to = "/vehicles"><button>Back to Home</button></Link>
        </div>
     );
}
 
export default signedOut;