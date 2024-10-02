import gsap from "gsap";
import { useEffect } from "react";

const Button = () => {
    useEffect(() => {
        const button = document.querySelector(".btn");

        button?.addEventListener("mouseenter", () => {
            gsap.to(button, {
                scale: 1.1,
                duration: 0.3,
                backgroundColor: "blue",
            });
        });
        button?.addEventListener("mouseleave", () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                // backgroundColor: "",
            });
        });

        return () => {
            button?.removeEventListener("mouseenter", () => {});
            button?.removeEventListener("mouseleave", () => {});
        };
    }, []);

    return (
        <div>
            <button className="btn">Click Me</button>
        </div>
    );
};

export default Button;
