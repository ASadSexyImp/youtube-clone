import React from 'react';
import "./VideoCard.css";
import { Avatar } from '@material-ui/core'

function VideoCard({image, title, channel, views, timestamp,channelImage }) {
  return (
    <div className='videoCard'>
        <img className='videocard_thumbnail' src={image} alt=""/>
        <div className="video_info">
            <Avatar
                className="videoC_avatar"
                alt={channel}
                src={channelImage}
            />
            <div className="video_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} ・ {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard