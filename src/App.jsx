import { UpdateFollower } from 'react-mouse-follower'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}>
        <Header />
        <Hero />

      </UpdateFollower>
    </main>
  )
}

export default App