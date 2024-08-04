import styles from './WhatWeStudy.module.scss';
import {TrackData} from 'pages/TrackPage/TrackContent';

interface TrackProps {
  track: TrackData
}

export default function WhatWeStudy({track}: TrackProps) {
  return (
    <>
      <div className={styles.title}>WHAT WE STUDY</div>
      <div className={styles.about}>
        {track.about.map((value, index) => (
          <div key={index} className={styles.about__box}>
            <div className={styles.about__title}>
              {value.title}
            </div>
              <div className={styles.about__description}>
              {value.description.split('\n').map((line, idx) => (
                <div key={idx}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}