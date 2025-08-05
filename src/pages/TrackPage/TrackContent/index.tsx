import androidData from 'static/trackDatas/android.ts';
import backendData from 'static/trackDatas/backend';
import frontendData from 'static/trackDatas/frontend';
import gameData from 'static/trackDatas/game';
import iosData from 'static/trackDatas/ios';
import uiuxData from 'static/trackDatas/uiux';
import { useParams } from 'react-router-dom';
import WhatWeStudy from './WhatWeStudy';
import Curriculum from './Curriculum';
import Members from './Members';
import TechStack from './TechStack';

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


export type TrackData = {
  name: string;
  about: About[];
  curriculums: WeekCurriculum[];
}


function TrackContent() {
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
    <div>
      <WhatWeStudy track={data}/>
      <Curriculum track={data}/>
      <Members />
      <TechStack />
    </div>
  )
}

export default TrackContent;