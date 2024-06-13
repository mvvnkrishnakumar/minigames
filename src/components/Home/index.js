import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {
  HomeHeading,
  HomeBackground,
  HomeCard,
  HomeAlign,
  HomeCardImage,
  CardHeading,
} from './styledComponents'
class Home extends Component {
  render() {
    return (
      <HomeBackground className="home-bg">
        <div>
          <HomeHeading>Games</HomeHeading>
          <HomeAlign>
            <Link to="/emoji-start">
              <HomeCard>
                <HomeCardImage src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/emojigamecard" />
              </HomeCard>
            </Link>
            <Link to="/grid-start" className="link">
              <HomeCard>
                <CardHeading>Memory Matrix</CardHeading>
                <HomeCardImage src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/zaphelhbkcakwyb4gk7w" />
              </HomeCard>
            </Link>
          </HomeAlign>
          <HomeAlign>
            <Link to="/rps-start" className="link">
              <HomeCard>
                <CardHeading> ROCK PAPER SCISSOR</CardHeading>
                <HomeCardImage src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/rp0bwgi9kwc3nmhhonws" />
              </HomeCard>
            </Link>
            <Link to="/memory-start">
              <HomeCard>
                <HomeCardImage src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/zm0c9ayvbkgygkm3jz0j" />
              </HomeCard>
            </Link>
          </HomeAlign>
        </div>
      </HomeBackground>
    )
  }
}
export default Home
