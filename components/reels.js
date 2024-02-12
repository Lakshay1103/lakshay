import React from 'react'

const reels = () => {
    return (
        <div>

            <h1>Snippets of <span>Satisfaction</span></h1>
            <div className="reels-container">
                
                <div className="reel">
                    <video src="/reels/1.mp4" controls></video>
                </div>
                <div className="reel">
                    <video src="/reels/2.mp4" controls></video>
                </div>
                <div className="reel">
                    <video src="/reels/3.mp4" controls></video>
                </div>
                
            </div>

        </div>
    )

}

export default reels
