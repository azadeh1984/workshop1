//import  ReactDOM  from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom/client';
import StudentTable from "./StudentTable";



//const greetingMessage = <div> Hello React </div>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentTable />);

//const greetingMessage = <div> Hello React I am Azadeh</div>
//const root = ReactDOM.creatRoot(document.getElementById(`root`));

//ReactDOM.render(greetingMessage, document.getElementById(`root`));