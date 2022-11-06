import Header from "./components/Header";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Qualifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">References</Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Button variant = "danger" onClick ={() => {localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); window.location.reload();}}> Change Mode </Button>
        </Nav.Item>
      </Nav>
      <Header
        linkText="Learn React"
        linkUrl="https://reactjs.org"
      />
    </div>
  );
}

export default App;

//props -> passed down from parent to child. Ex. f(x, y, x) . A child should not change the props 

//state -> is owned by the component, f has it's own state, this.state.g
// setState() -> component lifecycle methods
//hooks -> usereffects