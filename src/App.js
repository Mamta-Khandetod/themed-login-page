
import './App.css';
import logo from "../src/hiring-bg.png";
function App() {
  return (
    <div className="row" style={{ height: "100vh", width: "100%" }} >
      <div className="col-5 box1">
        <h5 className="mt-3 hotshot-heading" style={{ marginLeft: '10px' }}>Hire Hotshot</h5>
        <div className="align-items-center d-flex  justify-content-center">

          <div className="mt-2" style={{ width: "70%" }}>
            <h2 className='heading' >Getting hired just got easy</h2>
            <div className="card d-flex flex-column justify-content-center align-items-center card-div p-2">
              <h5 className='sub-heading'>Login</h5>
              <label className='sub-heading' style={{ width: '90%' }}>UserName:
                <input className='form-control input-bg' />
              </label>

              <label className='sub-heading' style={{ width: '90%' }}>Password:
                <input className='form-control input-bg' />
              </label>

              <button className='login-btn btn'>Login</button>
            </div>
          </div>
        </div>
      </div>


      <div className="col-7 box2" >
        <img src={logo} />
      </div>
    </div>
  );
}

export default App;
