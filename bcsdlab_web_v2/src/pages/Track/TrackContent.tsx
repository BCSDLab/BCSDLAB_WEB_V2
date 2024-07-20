import androidData from 'static/trackDatas/android.ts';
import backendData from 'static/trackDatas/backend';
import frontendData from 'static/trackDatas/frontend';
import gameData from 'static/trackDatas/game';
import iosData from 'static/trackDatas/ios';
import uiuxData from 'static/trackDatas/uiux';
import styles from './TrackPage.module.scss';

type About = {
  title: string;
  description: string;
}

type CurriculumContents = {
  title: string;
  description?: string[];
}

type WeekCurriculum = {
  week: string;
  contents: CurriculumContents[];
}


type TrackData = {
  name: string;
  about: About[];
  curriculums: WeekCurriculum[];
}

type Tracks = {
  track: 'frontend' | 'backend' | 'android' | 'ios' | 'uiux' | 'game';
}

export default function TrackContent(track: Tracks) {
  let data: TrackData;
  switch(track.track) {
    case 'frontend':
      data = frontendData;
      break;
    case 'backend':
      data = backendData;
      break;
    case 'android':
      data = androidData;
      break;
    case 'ios':
      data = iosData;
      break;
    case 'uiux':
      data = uiuxData;
      break;
    case 'game':
      data = gameData;
      break;
    default :
      data = frontendData;
  }
  
  return (
    <div className={styles.component}>
      <div className={styles.component__title}>WHAT WE STUDY</div>
        <div className={styles.component__about}>
          {data.about.map((value, index) => (
            <div key={index} >
              <div className={styles['component__about--title']}>
                {value.title}
              </div>
              {value.description.split('\n').map((line, idx) => (
                <div key={idx} className={styles['component__about--description']}>
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
      <div className={styles.component__title}>CURRICULUM</div>
    </div>
  )
}