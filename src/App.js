import Main from "./component/main/Main";
import Nav from "./component/nav/Nav";
import Sidbar from "./component/sidbar/Sidbar";

function App() {
  return (
    <>
      <Nav />
      <div className="d-flex ">
        <Sidbar />
        <Main />
      </div>
    </>
  );
}

export default App;
