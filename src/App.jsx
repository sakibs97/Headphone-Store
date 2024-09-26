import { UpdateFollower } from 'react-mouse-follower'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'

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
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "#000",
          zIndex: 999,
          followSpeed: 1.5,
        }}>
        <Service />
      </UpdateFollower>
    </main>
  )
}

export default App