import './Navbar.css';

function Navbar(props) {

    return (
        <div id="navbar">
            <h1>This is my Navigation Bar</h1>
            <h3>MY name is {props.name}{props.lastname}</h3>
        </div>
    );
  }

export default Navbar