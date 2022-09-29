import logo from "./logo.svg";
import "./App.css";
import UpdateProfile from "./component/userProfile/UpdateProfile";
import BasicList from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/*<h1 className="text-3xl font-bold underline">Hello world!</h1>*/}
      {/*  <UpdateProfile></UpdateProfile>*/}
        <UpdateProfile/>
    </div>

  );
}

export default App;
