import './style.css';
import image from '../assets/hero.png'

export function Hero(){
    return(
        < >
            <div className='icons-container'>
                <ul className='social'>
                    <li><i class="fa fa-facebook"></i></li>
                    <li><i class="fa fa-twitter"></i></li>
                    <li><i class="fa fa-instagram"></i></li>
                    <li><i class="fa fa-linkedin"></i></li>
                    
                </ul>
            </div>

            <div className='details-container'>
                <h4>Hello I'm</h4>
                <h3>Johthan Smith</h3>
                <h6>Professional freelancer &we developer</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe officiis vero tempora maiores molestiae deleniti, excepturi nihil quam necessitatibus in qui voluptatem culpa quasi molestias cupiditate! Sit provident velit repudiandae!</p>
                <button id='hire-me'>Hire Me</button>
            </div>
            <div className='img-container'>
                <img className='hero-img' src={image} alt="" />
            </div>
        </>
    )
}