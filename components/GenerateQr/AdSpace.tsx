export default function AdSpace({ position }) {
  const adStyles = {
    top: 'w-full h-24 bg-gray-100 flex items-center justify-center my-4',
    bottom: 'w-full h-24 bg-gray-100 flex items-center justify-center my-4',
    left: 'hidden lg:flex w-48 bg-gray-100 items-center justify-center',
    right: 'hidden lg:flex w-48 bg-gray-100 items-center justify-center',
  }

  return (
    <div className={adStyles[position]}>
      <div className="w-full h-full border border-dashed border-gray-300 flex items-center justify-center p-4 text-gray-500 text-sm">
        {position === 'left' || position === 'right' ? (
          <span className="rotate-90 whitespace-nowrap">Advertisement</span>
        ) : (
          <span>Advertisement</span>
        )}
      </div>
    </div>
  )
}
