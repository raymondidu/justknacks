"use client"
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState, useEffect } from 'react';

export default function Home() {
  
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
     <>
     <script id='pixel-script-poptin' src='https://cdn.popt.in/pixel.js?id=93ddb2383e6b8' async></script>
     //<Script src="https://cdn.popt.in/pixel.js?id=93ddb2383e6b8" async/>


      {isMobile ?
    
    (
   

    <div className="min-h-screen">



        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Justknacks-waitlist-mobile.png"
            alt="Cultural background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
    </div> 
 
    ):

     (
      <a href="https://app.popt.in/api/display/click/c3e6536c922d8">
     <div className="min-h-screen">



        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Justknacks-waitlist-desktop.png"
            alt="Cultural background"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
    </div> 
     </a>
    )}
      
  </>
  );
}
//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScrO_Na0q2doyrSieBOHMBAqdnZi1seqFMwL-PhWJLEaRt7uA/viewform?embedded=true" width="640" height="419" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>