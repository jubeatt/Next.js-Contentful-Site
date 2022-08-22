export default function Skeleton() {
  return (
    <div className='skeleton'>
      <div className='banner'></div>
      <div className='title'></div>
      <div className='text'></div>
      <div className='text'></div>
      <div className='text'></div>
      <div className='text'></div>

      <style jsx>{`
        .skeleton {
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: fade 1.5s ease-in-out 0.5s infinite;
          margin: 30px auto;
        }
        .banner {
          background: rgba(0, 0, 0, 0.11);
          height: 300px;
          border-radius: 4px;
          margin-bottom: 30px;
        }
        .title {
          width: 60%;
          background: rgba(0, 0, 0, 0.11);
          padding: 18px;
          border-radius: 4px;
        }
        .text {
          background: rgba(0, 0, 0, 0.11);
          padding: 12px;
          border-radius: 4px;
        }
        @keyframes fade {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
