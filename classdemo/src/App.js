import Header from "./components/Header";


function App() {
  return (
    <div className="App">
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