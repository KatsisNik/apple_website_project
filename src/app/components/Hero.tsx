import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '@/utils';
import { useState, useEffect } from 'react';

export default function Hero() {
    // Initialize state with null or a placeholder value
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    useEffect(() => {
        // Check window width and update state when component mounts
        const handleResize = () => {
            setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
        };

        handleResize(); // Set initial value

        // Optionally, add an event listener for window resize to update the video source dynamically
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2, duration: 1.5 });
        gsap.to('#cta', {opacity: 1, y: '-50', delay: 2})
    }, []);

    return (
        <section className="w-full nav-height bg-black relative">
            {/* <p>{hmv}</p> */}
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    {videoSrc && (
                        <video className='pointer-events-none' autoPlay muted playsInline key={videoSrc}>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    )}
                </div>
            </div>
            <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href='#highlights' className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
            </div>
        </section>
    );
}
