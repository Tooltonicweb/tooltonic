'use client';

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'; // ✅ Correct Import
import FileUpload from '../../../components/MP3Cutter/FileUpload';
import AudioPlayer from '../../../components/MP3Cutter/AudioPlayer';
import RangeSelector from '../../../components/MP3Cutter/RangeSelector';
import AdSpace from '../../../components/MP3Cutter/AdSpace';
import styles from '../../../styles/Home.module.css';


let ffmpegInstance = null;
let fetchFileRef = null;

export default function Home() {
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');
  const [trimmedAudioUrl, setTrimmedAudioUrl] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [format, setFormat] = useState('mp3');
  const [bitrate, setBitrate] = useState(192);
  const [error, setError] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  const handleFileUpload = (file) => {
    setError('');
    if (!file.type.includes('audio')) {
      setError('Please upload an audio file (MP3, WAV, etc.)');
      return;
    }

    setAudioFile(file);
    setFileName(file.name);
    setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');

    const url = URL.createObjectURL(file);
    setAudioUrl(url);

    const audio = new Audio(url);
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
      setEndTime(audio.duration);
      audioRef.current = audio;
    };
  };

 const ffmpeg = useRef(null); // Top of component

const handleTrim = async () => {
  if (!audioFile || startTime >= endTime) {
    setError('Invalid time range selected');
    return;
  }

  setIsProcessing(true);

  try {
    if (!ffmpeg.current) {
      ffmpeg.current = createFFmpeg({ log: true }); // Use imported one
    }

    if (!ffmpeg.current.isLoaded()) {
      await ffmpeg.current.load();
    }

    const inputName = 'input.mp3';
    const outputName = `output.${format}`;

    ffmpeg.current.FS('writeFile', inputName, await fetchFile(audioFile));

    await ffmpeg.current.run(
      '-i', inputName,
      '-ss', startTime.toString(),
      '-to', endTime.toString(),
      '-b:a', `${bitrate}k`,
      outputName
    );

    const data = ffmpeg.current.FS('readFile', outputName);
    const blob = new Blob([data.buffer], { type: `audio/${format}` });
    const url = URL.createObjectURL(blob);

    setTrimmedAudioUrl(url);
  } catch (err) {
    setError('Error processing audio: ' + err.message);
  } finally {
    setIsProcessing(false);
  }
};


  const handleDownload = () => {
    if (!trimmedAudioUrl) return;
    const a = document.createElement('a');
    a.href = trimmedAudioUrl;
    a.download = `trimmed_${fileName}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out this trimmed audio from ToolTonic',
          text: 'I just trimmed an audio file using ToolTonic - AI Powered File First Aid',
          url: window.location.href,
        })
        .catch(console.log);
    } else {
      alert('Web Share API not supported in your browser. Copy the URL manually.');
    }
  };

  const resetAll = () => {
    setAudioFile(null);
    setAudioUrl('');
    setTrimmedAudioUrl('');
    setStartTime(0);
    setEndTime(0);
    setDuration(0);
    setFileName('');
    setFileSize('');
    setError('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>MP3 Cutter - ToolTonic | AI Powered File First Aid</title>
        <meta name="description" content="Free online MP3 cutter tool. Cut and edit your audio files quickly with our AI-powered file first aid solution." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdSpace position="top" />

      <main className={styles.main}>
        <div className={styles.adLeft}><AdSpace position="left" /></div>

        <div className={styles.content}>
          <h1 className={styles.title}>MP3 Cutter</h1>
          <p className={styles.description}>AI Powered File First Aid</p>

          {!audioFile ? (
            <FileUpload onFileUpload={handleFileUpload} />
          ) : (
            <div className={styles.editorContainer}>
              <div className={styles.fileInfo}>
                <h3>{fileName}</h3>
                <p>Size: {fileSize}</p>
                <p>Duration: {duration.toFixed(2)} seconds</p>
                <button onClick={resetAll} className={styles.resetButton}>Upload New File</button>
              </div>

              <div className={styles.audioSection}>
                <h3>Original Audio</h3>
                <AudioPlayer audioUrl={audioUrl} />
              </div>

              <RangeSelector
                duration={duration}
                startTime={startTime}
                endTime={endTime}
                onStartChange={setStartTime}
                onEndChange={setEndTime}
              />

              <div className={styles.settings}>
                <div className={styles.settingGroup}>
                  <label>Output Format:</label>
                  <select value={format} onChange={(e) => setFormat(e.target.value)}>
                    <option value="mp3">MP3</option>
                    <option value="wav">WAV</option>
                    <option value="ogg">OGG</option>
                  </select>
                </div>
                <div className={styles.settingGroup}>
                  <label>Bitrate (kbps):</label>
                  <select value={bitrate} onChange={(e) => setBitrate(parseInt(e.target.value))}>
                    <option value="64">64</option>
                    <option value="128">128</option>
                    <option value="192">192</option>
                    <option value="256">256</option>
                    <option value="320">320</option>
                  </select>
                </div>
              </div>

              <button onClick={handleTrim} disabled={isProcessing} className={styles.processButton}>
                {isProcessing ? 'Processing...' : 'Trim Audio'}
              </button>

              {trimmedAudioUrl && (
                <div className={styles.resultSection}>
                  <h3>Trimmed Audio</h3>
                  <AudioPlayer audioUrl={trimmedAudioUrl} />
                  <div className={styles.actionButtons}>
                    <button onClick={handleDownload} className={styles.downloadButton}>Download Trimmed Audio</button>
                    <button onClick={handleShare} className={styles.shareButton}>Share</button>
                  </div>
                </div>
              )}

              {error && <p className={styles.error}>{error}</p>}
            </div>
          )}
        </div>

        <div className={styles.adRight}><AdSpace position="right" /></div>
      </main>

      <AdSpace position="bottom" />
    </div>
  );
}
