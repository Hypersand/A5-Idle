import { useState, useEffect } from "react";

function CountingAnimation({ startValue, endValue, duration }) {
    const [currentValue, setCurrentValue] = useState(startValue);
    const startTime = Date.now();

    useEffect(() => {
        const animate = () => {
            const currentTime = Date.now() - startTime;
            const progress = Math.min(1, currentTime / duration);
            const interpolatedValue = startValue + (endValue - startValue) * progress;
            setCurrentValue(interpolatedValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [startValue, endValue, duration]);

    return <span>{Math.round(currentValue).toLocaleString()}</span>;
}

export default CountingAnimation;
