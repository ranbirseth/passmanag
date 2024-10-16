import './App.css'
import Manager from './component/Manager'
import Navbar from './component/Navbar'
import Foter from './component/Foter'
function App() {
 
  return (
    <>
    <Navbar/>
    <div className='text-center items-center p-12'>
    <div className="logo font-bold text-3xl text-white">Password Manager</div>
    <div className="hading  mt-2 text-white">your Own Password Manager  </div>
    </div>

    <Manager/>

    <Foter/>
    </>
  )
}

export default App
