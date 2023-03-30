import { useRef, useEffect } from "react";
import gsap from "gsap";

const Section = ({ id, children, className = "", fullHeight = true }: any) => {
  const ref = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const section: any = ref.current;
    const child: any = childRef.current;

    const sectionWidth = section.offsetWidth;
    const childWidth = child.offsetWidth;
    const offset = (sectionWidth - childWidth) / 2;

    gsap.to(child, {
      x: offset,
      scrollTrigger: {
        scrub: true,
        pin: fullHeight,
        trigger: section,
        start: "top top",
        end: fullHeight ? `+=80%` : "",
        onLeave: () => gsap.to(child, { opacity: 0 }),
        onLeaveBack: () => gsap.to(child, { opacity: 1 }),
      },
    });
  }, [ref, childRef]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${className} ${fullHeight ? "h-screen" : ""}`}
    >
      <div
        ref={childRef}
        className={`flex items-center justify-center w-full ${
          fullHeight ? "h-full" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
