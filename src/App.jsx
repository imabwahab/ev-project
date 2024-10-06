
import { useState , useEffect} from 'react'
import './App.css'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';


function App() {

  let HeroData = [
    { text1: 'Dive into ', text2: 'What you love' },
    { text1: 'Indulge', text2: 'your passions' },
    { text1: 'Give in to ', text2: 'your passions' }
  ];

  let [Count, setCount] = useState(0);
  let [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000)
  }, [])

  return (
    <>
      <Background Count={Count} playStatus={playStatus} />
      <Navbar />
      <Hero
        HeroData={HeroData[Count]}
        Count={Count}
        setCount={setCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </>
  )
}

export default App
