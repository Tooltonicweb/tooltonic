import React from 'react'

const AdSpace = ({ position }) => {
  const getAdClass = () => {
    switch (position) {
      case 'top':
      case 'bottom':
        return 'horizontal-ad'
      case 'left':
      case 'right':
        return 'vertical-ad'
      default:
        return ''
    }
  }

  return (
    <div className={`ad-space ${getAdClass()}`}>
      {/* Replace with your actual AdSense code */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_ADSENSE_ID"
        data-ad-slot={`YOUR_AD_SLOT_${position.toUpperCase()}`}
        data-ad-format={position === 'top' || position === 'bottom' ? 'auto' : 'vertical'}
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}

export default AdSpace