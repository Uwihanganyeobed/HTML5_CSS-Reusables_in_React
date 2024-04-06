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
    </div>
  )
}

export default App