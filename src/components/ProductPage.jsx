
import React, { useEffect, useRef } from 'react';
import './ProductPage.css';
import vr1 from '../assets/images/img1vr.jpg'
import productVideo from '../assets/images/large.mp4';
const ProductPage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25,
        };

        const handlePlayVideo = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handlePlayVideo, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);
    return (
        <div className="product-page">
            <h1>Innovatech VR Pro</h1>
            <p>Experience the next level of virtual reality with the Innovatech VR Pro. Immerse yourself in a world of stunning visuals and incredible sound.</p>
            <div className="media">
                <img src={vr1} alt="Innovatech VR Pro" className="product-image" />
                <video ref={videoRef} muted loop className="product-video">
                    <source src={productVideo} type="video/mp4" />
                    
                </video>
            </div>
            <div className="features">
                <h2>Key Features</h2>
                <ul>
                    <li>High-Resolution Display for crystal-clear visuals</li>
                    <li>Wide Field of View for a more immersive experience</li>
                    <li>Comfortable Design for extended use</li>
                    <li>Advanced Motion Tracking for accurate interaction</li>
                    <li>Integrated Audio for high-fidelity sound</li>
                    <li>Wireless Connectivity for untethered freedom</li>
                    <li>Compatibility with a wide range of VR platforms</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;
