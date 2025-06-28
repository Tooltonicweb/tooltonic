import React, { useState, useEffect } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const RangeSelector = ({ duration, startTime, endTime, onStartChange, onEndChange }) => {
  const [start, setStart] = useState(startTime)
  const [end, setEnd] = useState(endTime)

  useEffect(() => {
    setStart(startTime)
    setEnd(endTime)
  }, [startTime, endTime])

  const handleStartChange = (value) => {
    setStart(value)
    if (value < end) onStartChange(value)
  }

  const handleEndChange = (value) => {
    setEnd(value)
    if (value > start) onEndChange(value)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  return (
    <div className="range-selector">
      <h3>Select Time Range</h3>
      <div className="time-display">
        <span>Start: {formatTime(start)}</span>
        <span>End: {formatTime(end)}</span>
        <span>Duration: {formatTime(end - start)}</span>
      </div>
      <div className="slider-container">
        <Slider min={0} max={duration} step={0.1} value={start} onChange={handleStartChange} />
        <Slider min={0} max={duration} step={0.1} value={end} onChange={handleEndChange} />
      </div>
      <div className="time-inputs">
        <label>Start Time</label>
        <input type="number" value={start} onChange={(e) => handleStartChange(parseFloat(e.target.value))} />
        <label>End Time</label>
        <input type="number" value={end} onChange={(e) => handleEndChange(parseFloat(e.target.value))} />
      </div>
    </div>
  )
}

export default RangeSelector