import React from 'react';

function Bglayer() {
  return (
    <div className="fixed w-full h-full opacity-75   -z-10 top-0 left-0 flex">
      {Array(4).fill('').map((_, i) => (
        <div
          key={i}
          className="relative flex-1 h-full   -z-10  overflow-hidden"
        >
            <div className='absolute top-0 right-[6px] z-0 h-full bg-neutral-100 w-[1px]' />
      <div
  className="absolute  right-[4px] bg-gradient-to-t from-[#cbc8c8b5] via-[#e7e4e4eb] to-[#ffffffd4] z-0 -translate-y-1/2  animate-bglayer"
  style={{
    width: "3px",
    height: "100px",
    borderTopLeftRadius: "200% 200%",
    borderTopRightRadius: "200% 200%",
    borderBottomLeftRadius: "100% 100%",
    borderBottomRightRadius: "100% 100%",
      animationDelay: `${i%2 * 10.0}s`,
  }}
></div>

        
        </div>
      ))}
    </div>
  );
}

export default Bglayer;
