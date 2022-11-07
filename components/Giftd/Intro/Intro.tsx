import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/intro.styles.module.css';

const Intro = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>Context</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>Giftd is an app, available on iOS and android, through which you can gift your pre-loved clothes to friends, family and neighbors. More than 3600 downloads and over 2000 gifts have been made since it started in November 2021.</p>
                <p>Take a look - <a href="https://www.giftd.app/" target="_blank" rel="noopener noreferrer">www.giftd.app</a></p>
                <h1>Timeline</h1>
                <p>July 2022 - ongoing</p>
                <h1>Team</h1>
                <p>1 UX/UI designer - Me, 1 founder, 1 co founder and CTO</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Responsibilities</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>My involvement with Giftd started in July and it is ongoing, since then I have been taking on a couple of challenges.</p>
                <p>As the sole UX/UI designer I am responsible for ​​improving existing flows, working on new features, initial discovery and iterate design solutions at all levels of fidelity. <b>In this case study I will talk about how I approached challenges such as:</b></p>
                <p><b>01.</b> Optimizing and iterating on the onboarding flow</p>
                <p><b>02.</b> Designing a filtering option</p>
                <p><b>01.</b> Designing the delivery feature</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>My mission & personal aims</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p><b>Improve the app experience and impact the number of people joining and making clothes transactions.</b></p>
                <p>Since joining Giftd as a volunteer, I had three key personal goals that I wanted to learn and improve on:</p>
                <div>
                    <ul>
                        <li><p>Be in an environment in which we will build and implement quickly</p></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><p>Put into practice what I have learned and learn how to articulate and inform my design decisions</p></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><p>Learning to be adaptable with the workflow</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Intro