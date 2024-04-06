import './App.css'
import Accordition from './components/Accordition/Accordition'
import Form from './components/Form/Form'
import GoogleCharts from './components/GoogleCharts/GoogleCharts'
import Hover from './components/Hover/Hover'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Form/>
      <GoogleCharts/>
      <Hover/>
      <Accordition/>
      <Sidebar/>
      <p><a href="https://html-5-css-reusables-in-react.vercel.app/#">Visite This Web</a></p>
    </div>
  )
}

export default App