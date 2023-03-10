import { Parallax } from 'react-parallax';
import cliff from '../assets/cliff.jpg'
import portfolioJpg from '../assets/PortfolioPhoto.jpg'

const Cliff = () => (
    <Parallax className="image"  bgImage={cliff} bgImageAlt="a white cliff along the ocean" strength={800}>
        <div className='hero'>
            <div className='profilePhotoContainer'>
                <img className= "portfolioJpg"src ={portfolioJpg}/>
            </div>
            <div className="heroTxtContainer">
                <h1 className='heroTxt'><span className='heroMain'>BUILD</span> <span className='heroMain splash'>WEB</span> <span className='heroAccent'>BETTER</span> </h1>
            </div>
        </div>
    </Parallax>
);

export default Cliff