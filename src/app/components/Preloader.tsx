"use client";

import React, { useEffect, useState } from 'react';

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500); 
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);


    
    const [shouldRender, setShouldRender] = useState(true);
    
    useEffect(() => {
        if (!isLoading) {
            const timeout = setTimeout(() => {
                setShouldRender(false);
            }, 800); 
            return () => clearTimeout(timeout);
        }
    }, [isLoading]);

    if (!shouldRender) return null;

    return (
        <div className={`preloader-overlay ${!isLoading ? 'hidden' : ''}`}>
            <div className="ai-matrix-loader">
                <div className="digit">1</div>
                <div className="digit">0</div>
                <div className="digit">1</div>
                <div className="digit">0</div>
                <div className="digit">1</div>
                <div className="digit">0</div>
                <div className="digit">1</div>
                <div className="digit">0</div>
                <div className="digit">1</div>
                <div className="glow"></div>
            </div>
        </div>
    );
};
