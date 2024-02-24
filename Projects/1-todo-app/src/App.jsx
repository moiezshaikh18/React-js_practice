import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "../src/style/App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
          <div className="container">
            <div className="row kg-row">
              <h5 className="col-6">Buy Milks</h5>
              <h5 className="col-4">4/10/2023</h5>
              <div className="col-2">
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>

            <div className="row kg-row">
              <h5 className="col-6">Go to Colloge</h5>
              <h5 className="col-4">4/10/2023</h5>
              <div className="col-2">
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
