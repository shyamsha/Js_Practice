import React from "react";

function VideoStream() {
  return (
    <div className="m-5">
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/PJ_U1dQgRmI"
        title="Took a crazy nap LOL"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoStream;
