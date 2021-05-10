import { useEffect, useRef, useState } from 'react';

// Hook
function useScroll(
    yPostion: number,
    scrollDown: () => void,
    scrollUp: () => void,
) {
    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // move down
            if (
                prevScrollY.current < currentScrollY &&
                goingUp &&
                currentScrollY > yPostion
            ) {
                setGoingUp(false);
                scrollDown();
            }
            // move up
            if (
                prevScrollY.current > currentScrollY &&
                !goingUp &&
                currentScrollY < yPostion
            ) {
                setGoingUp(true);
                scrollUp();
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [goingUp]);
    return;
}

export default useScroll;
