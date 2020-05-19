import { useState, useEffect } from "react";

const useDraggable = el => {
    const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 });
    useEffect(() => {
        const handleMouseDown = ev => {
            const startX = ev.pageX - dx;
            const startY = ev.pageY - dy;
            const handleMouseMove = ev => {
                const newDx = ev.pageX - startX;
                const newDy = ev.pageY - startY;
                setOffset({ dx: newDx, dy: newDy });
            };
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("touchstart", handleMouseMove);
            document.addEventListener(
                "mouseup",
                () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                },
                { once: true }
                );
            };
        let element = el.current;
        element.addEventListener("touchend", handleMouseDown);
        element.addEventListener("mousedown", handleMouseDown);
        return () => {
            element.removeEventListener("mousedown", handleMouseDown);
        };
    }, [dx, dy, el]);

    useEffect(() => {
        let element = el.current;
        element.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }, [dx, dy, el]);
};

export default useDraggable;
