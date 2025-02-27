import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import discovery from '../../public/assets/images/content/discovery/discovery.png';

const Discovery = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>I was pleasantly surprised to find that Boki could fill a gap on the existing cultural / lifestyle market</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>In order to develop Boki, I looked at the current market for finding exhibits and cultural experiences in Berlin.</p>
        <p>To identify areas of potential growth and a understanding of competitors’ strengths and weaknesses I did a competitive analysis of the 4 most popular apps and sites surrounding cultural event discovery offers for Berlin but not only.</p>
      </div>
      <ImageView imageDescription="In-depth competitive analysis" imageDescriptionUrl="https://docs.google.com/spreadsheets/d/1_Qdu88iD18dT6_1p4p4L4e6hAyq856mAqqNhKVcdod0/edit?resourcekey=0-OKQnteq4uLGhYOeSpD63Qg#gid=2073884517" centerImageDescription image={discovery} imageAltText="Discovery" imageDisplay={ImageDisplay.center}/>
    </>
  )
}

export default Discovery;