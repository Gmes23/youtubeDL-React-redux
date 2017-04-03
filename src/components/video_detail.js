import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div> loading... </div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const DownloadLink = `//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
                <a href={DownloadLink} className="btn btn-info">Download</a>
            </div>
        </div>
    )
};

export default VideoDetail;