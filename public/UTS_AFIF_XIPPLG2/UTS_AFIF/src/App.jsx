import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import ProfilePage from "./components/ProfilePage"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Counter />  
          </>
        } />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App