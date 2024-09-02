import React from 'react';
import './VideoGrid.css';
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import video5 from "./videos/video5.mp4";
import video6 from "./videos/video6.mp4";
import video7 from "./videos/video7.mp4";
import video8 from "./videos/video8.mp4";
import video9 from "./videos/video9.mp4";

const videos = [
  { id: 1, title: 'Video 1', thumbnail: {video1} },
  { id: 2, title: 'Video 2', thumbnail: {video2} },
  { id: 3, title: 'Video 3', thumbnail: {video3} },
  { id: 4, title: 'Video 4', thumbnail: {video4} },
  { id: 5, title: 'Video 5', thumbnail: {video5} },
  { id: 6, title: 'Video 6', thumbnail: {video6} },
  { id: 7, title: 'Video 7', thumbnail: {video7} },
  { id: 8, title: 'Video 8', thumbnail: {video8} },
  { id: 9, title: 'Video 9', thumbnail: {video9} },
  // Add more videos as needed
];

function VideoGrid() {
  return (
    <div className="video-grid">
      {videos.map(video => (
        <div key={video.id} className="video-card">
          <img src={video.thumbnail} alt={video.title} />
          <h4>{video.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
