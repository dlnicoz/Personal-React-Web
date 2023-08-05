import ConfigData from './config.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './components/homepage/Homepage.jsx';

function App() {

  const data = ConfigData
  return (
    <>

      <BrowserRouter>
        <div style={{ 'backgroundColor': data.settings.backgroundColor }}>
          <div className='container-fluid'>
            <div className='row'>
              <Routes>
                <Route index path="/" element={<Homepage data={data}/>} />
              </Routes>
            </div></div></div>

        
      </BrowserRouter>
    </>
  )
}

export default App
