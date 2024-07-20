import frontendData from 'static/trackDatas/frontend';
import TrackContent from '../TrackContent';

function FrontendPage() {
  console.log(frontendData.about.map(title => title.title));
  const track = 'frontend';
  return (
    <>
      <TrackContent track={track} />
    </>
  )
}

export default FrontendPage;
