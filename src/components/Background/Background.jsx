import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'



const Background = ({Count, playStatus}) => {
  if(playStatus){
    return (
      <video className='Background fade-in' autoPlay loop muted preload='auto'>
        <source src={video1} type='video/mp4'/>
      </video>
    )
  }

  else if (Count===0) {
    return <img src={image1} className='Background fade-in' alt="" />
  }

  else if (Count===1){
    return <img src={image2} className='Background fade-in' alt="" />
  }

  else if (Count===2){
    return <img src={image3} className='Background fade-in' alt="" />
  }
}

export default Background
