import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './modules/app/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App