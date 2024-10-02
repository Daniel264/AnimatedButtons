import gsap from "gsap";
import { useEffect } from "react";

const Button = () => {
    useEffect(() => {
        const button = document.querySelector(".btn");

        if (button) {
            // Set the initial background (white)
            gsap.set(button, {
                background: "white",
                color: "black"
            });

            // On hover (mouseenter), animate the background to slide from left to right
            button.addEventListener("mouseenter", () => {
                gsap.to(button, {
                    background: "linear-gradient(to right, blue 100%, white 0%)", // Create gradient effect
                    backgroundSize: "200% 100%",
                    backgroundPosition: "0% 0", // Reveal blue color from left
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            });

            // On hover out (mouseleave), reverse the background back to white
            button.addEventListener("mouseleave", () => {
                gsap.to(button, {
                    backgroundPosition: "100% 0", // Slide back to white
                    duration: 0.5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.set(button, {
                            background: "white",
                            color: "black"
                        });
                    }
       
                });
            });
        }

        return () => {
            button?.removeEventListener("mouseenter", () => {});
            button?.removeEventListener("mouseleave", () => {});
        };
    }, []);

    return (
        <div>
            <button className="btn" >
                Hover Me
            </button>
        </div>
    );
};



export default Button;
