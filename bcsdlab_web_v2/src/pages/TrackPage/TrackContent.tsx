import androidData from 'static/trackDatas/android.ts';
import backendData from 'static/trackDatas/backend';
import frontendData from 'static/trackDatas/frontend';
import gameData from 'static/trackDatas/game';
import iosData from 'static/trackDatas/ios';
import uiuxData from 'static/trackDatas/uiux';
import styles from './TrackPage.module.scss';
import { useParams } from 'react-router-dom';

type About = {
  title: string;
  description: string;
}

type CurriculumContents = {
  title: string;
  descriptions?: string[];
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

// type Tracks = {
//   track: 'frontend' | 'backend' | 'android' | 'ios' | 'uiux' | 'game';
// }

export default function TrackContent() {
  let data: TrackData;
  const { trackName } = useParams();
  switch(trackName) {
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
          <div key={index} className={styles['component__about--box']}>
            <div className={styles['component__about--title']}>
              {value.title}
            </div>
              <div className={styles['component__about--description']}>
              {value.description.split('\n').map((line, idx) => (
                <div key={idx}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.component__title}>CURRICULUM</div>
      <div className={styles.curriculum}>
        <div className={styles.curriculum__head}>
          <div className={styles['curriculum__head--week']}>주차</div>
          <div className={styles['curriculum__head--subject']}>교과목</div>
        </div>
        <div className={styles.curriculum__body}>
          {data.curriculums.map((value, index) => (
            <div className={styles.curriculum__weeks} key={index}>
              <div className={styles['curriculum__body--week']}>{value.week}</div>
              <div className={styles['curriculum__body--subject']}>
                {value.contents.map((content, idx) => (
                  <div key={idx}>
                    <div className={styles['curriculum__body--title']}>
                      <img src='https://static.koreatech.in/bcsdlab_page_assets/img/48.png' alt='list'></img>
                      {content.title}
                    </div>
                    <div className={styles['curriculum__body--description']}>
                      {content.descriptions && content.descriptions.map((description) => (
                        <div>{description}</div>
                      ))}
                    </div>
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}