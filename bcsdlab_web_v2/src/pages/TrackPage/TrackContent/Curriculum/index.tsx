import {TrackData} from 'pages/TrackPage/TrackContent';
import styles from './Curriculum.module.scss';

interface TrackProps {
  track: TrackData
}

export default function Curriculum({track}: TrackProps) {
  return (
    <>
      <div className={styles.title}>CURRICULUM</div>
      <div className={styles.curriculum}>
        <div className={styles.curriculum__head}>
          <div className={styles['curriculum__head--week']}>주차</div>
          <div className={styles['curriculum__head--subject']}>교과목</div>
        </div>
        <div className={styles.curriculum__body}>
          {track.curriculums.map((value, index) => (
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
    </>
  )
}
