import React from 'react'
import YouTube from 'react-youtube'
import styles from './styles.module.scss'
export const YoutubeSection = () => {
  const opts = {
    width: '912',
    height: '511',
    playerVars: {
      autoplay: 0
    }
  }

  function onReadyVideo(event: any) {
    event.target.pauseVideo()
  }

  return (
    <section className={styles.youtubeSection}>
      <div className={styles.youtubePlayer}>
        <YouTube videoId="l2WcxMAaiRA" opts={opts} onReady={onReadyVideo} />
      </div>
    </section>
  )
}
