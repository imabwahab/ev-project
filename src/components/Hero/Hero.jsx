import './Hero.css'
import arrowBtn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({ HeroData, Count, setCount, playStatus, setPlayStatus }) => {

  return (
    <div className="Hero">
      <div className="HeroText">
        <p> {HeroData.text1} </p>
        <p> {HeroData.text2} </p>
      </div>

      <div className="heroExplore">
        <p>Explore the features</p>
        <img src={arrowBtn} alt="" />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setCount(0)} className={Count === 0 ? 'hero-dot orange' : 'hero-dot'} ></li>
          <li onClick={() => setCount(1)} className={Count === 1 ? 'hero-dot orange' : 'hero-dot'} ></li>
          <li onClick={() => setCount(2)} className={Count === 2 ? 'hero-dot orange' : 'hero-dot'} ></li>
        </ul>

        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" />

          <p>See ev Video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
