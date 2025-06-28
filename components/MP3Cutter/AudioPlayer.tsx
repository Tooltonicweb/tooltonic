import React, { useRef, useEffect } from 'react'

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load()
    }
  }, [audioUrl])

  return (
    <div className="audio-player">
      <audio controls ref={audioRef}>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioPlayer