import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";
 
const Tilt = ({ children, options, style }) => {
  const tiltRef = useRef();
 
  useEffect(() => {
    const tiltInstance = VanillaTilt.init(tiltRef.current, options);
 
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);
 
  return (
    <div ref={tiltRef} className="tile js-tilt" style={style}>
      {children}
    </div>
  );
};
 
export default Tilt;