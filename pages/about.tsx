import ImageView from '../components/ImageView/ImageView';
import biancaLarge from '../public/assets/images/content/about/bianca-large.png';
import biancaSmall from '../public/assets/images/content/about/bianca-small.png';
import teamJam from '../public/assets/images/content/about/team-jam.png';
import ContentView from '../components/ContentView/ContentView';
import aboutStyles from './styles/about.styles.module.css';
import Navigation from '../components/Navigation/Navigation';
import { ImageDisplay } from '../components/ImageView/interfaces';

const About = (): JSX.Element => {
  return (
    <>
      <div className={aboutStyles.about}>
        <div className={aboutStyles['about__wrapper']}>
          <Navigation className={aboutStyles['about__navigation']} />
          <ContentView>
            <ImageView className={aboutStyles['about__image-large']} image={biancaLarge} imageAltText="Bianca Large" />
            <ImageView className={aboutStyles['about__image-small']} image={biancaSmall} imageAltText="Bianca Small" />
            <div className={aboutStyles['about__col-right']}>
              <p>For me design is a way to connect with the world and be a bridge between what we understand about the human being, its capabilities and technology. </p>
              <p>What excites me about the field is that it lies at the intersection of human behavior, design and engineering.</p>
              <p>What motivates me about design is its collaborative and iterative approach to solving problems, as well as helping others (and myself) to do things more efficiently and become better every day.</p>
              <p>Personally, I enjoy the way our emotions and memories are linked with specific technologies. I still remember my first iPod, it was green, and I couldn’t imagine that I had all my playlist in one place, always with me. Maybe you had one too, what color was yours? </p>
            </div>
            <div className={aboutStyles['about__border']} />
            <h1 className={aboutStyles['about__col-left']}>What I value</h1>
            <div className={aboutStyles['about__col-right']}>
              <p>Stay Humble</p>
              <p>Hard work and being able to help others</p>
              <p>As a way of improving myself and helping others to improve, I enjoy giving and asking for feedback. I would love in the near future to mentor.</p>
            </div>
            <div className={aboutStyles['about__border']} />
            <h1 className={aboutStyles['about__col-left']}>Learning</h1>
            <div className={aboutStyles['about__col-right']}>
              <p>I am getting my hands on <b>design systems</b> and learning about <b>how to incorporate sustainability within the design process.</b></p>
              <p>Getting out of my comfort zone and <b>solving a problem using design thinking alongside amazing designers for 48 hours was an incredible experience.</b></p>
            </div>
            <ImageView image={teamJam} imageAltText="Bianca" imageDisplay={ImageDisplay.full} imageDescription={"Team Ice spice at the Service Design Jam - Berlin Hackathon, March 2023"} />
            <div className={aboutStyles['about__border']} />
            <h1 className={aboutStyles['about__col-left']}>I'm keeping an eye on this digital product</h1>
            <div className={aboutStyles['about__col-right']}>
              <p>A product that I recommend to my friends is <b>OKU</b>, a social network for reading lovers.  I love the clean and the simplicity of the interface and that I can have a say and vote for upcoming features to be implemented.</p>
              <p><a className={aboutStyles["about__link"]} href="https://oku.club/user/BiancaBasan" rel="noopener noreferrer" target="_blank">Here is my profile</a>, let's share books!</p>
            </div>

            <div className={aboutStyles['about__border']} />
            <h1 className={aboutStyles['about__col-left']}>Let's cross paths!</h1>
            <div className={aboutStyles['about__col-right']}>
              <p>We can talk about anything design, inclusion and psychology in design, personal development or review each others work.</p>
              <p>Send me an email at:</p>
              <a href='mailto:bianca.ioana.basan@gmail.com' className={`${aboutStyles["e-mail"]} ${aboutStyles["about__link"]}`} data-user="nasab.anaoi.acnaib" data-website="moc.liamg"></a>
              <p>I’d love to hear from you!</p>
            </div>
          </ContentView>
        </div>
      </div>
    </>
  )
}

export default About;