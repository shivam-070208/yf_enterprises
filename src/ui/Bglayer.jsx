import React from 'react';

function Bglayer() {
  return (
    <div className="absolute w-full h-full flex-nowrap -z-10 top-0 left-0 flex">
      {Array(4).fill('').map((_, i) => (
        <div
          key={i}
          className="relative flex-1 h-full   -z-10  overflow-hidden"
        >
            <div className='absolute top-0 right-[6px] z-0 h-full bg-neutral-100 w-[1px]' />
      <div
  className="absolute  right-[4px] z-0 -translate-y-1/2 bg-neutral-300 animate-bglayer"
  style={{
    width: "6px",
    height: "60px",
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
