import React from 'react';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage_filter">
            <TuneOutlinedIcon/>
            <h2>filter</h2>
        </div>
        <hr />

        <ChannelRow
            image=""
            channel="asadsexyimp"
            verified
            subs="100k"
            noOfVideos={100}
            description=""
        />
        <hr />

        <VideoRow />
    </div>
  )
}

export default SearchPage