import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { cn } from '@bcsdlab/utils';
import styles from './TrackPage.module.scss';

type Track = {
  label: string;
  path: string;
};

function TrackPage() {
  const navigate = useNavigate();
  const trackList = [
    {label: 'Front-End', path: 'frontend'},
    {label: 'Back-End', path: 'backend'},
    {label: 'Android', path: 'android'},
    {label: 'iOS', path: 'ios'},
    {label: 'UI/UX', path: 'uiux'},
    {label: 'Game', path: 'game'}
  ];
  const [selectedTrack, setSelectedTrack] = React.useState('');
  const onClickTrack = (track: Track) => {
    setSelectedTrack(track.label);
    navigate(track.path);
  }
  return (
    <>
      <div className={styles['track-list']}>
        {trackList.map((value, index) => (
          <div 
            key={index}
            onClick={() => onClickTrack(value)}
            className={cn({
              [styles['track-list__item']] : true,
              [styles['track-list__item--selected']]: value.label === selectedTrack,
            })}
          >
            {value.label}
          </div>
        ))}  
      </div>
      <Outlet />
    </>
  )
} 

export default TrackPage;