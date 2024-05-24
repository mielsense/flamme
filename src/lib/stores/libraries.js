import Lenis from "lenis";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { writable } from 'svelte/store';

export let lenis = writable();

function initScroll(container) {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return lenis;
}

export function init(container, items) {
    gsap.registerPlugin(ScrollTrigger);

    const scrollWidth = container.scrollWidth - window.innerWidth;
    const sections = gsap.utils.toArray(items);
  
    gsap.to(container, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.1, max: 0.4 },
            ease: 'power1.inOut'
          }
        }
      });

    return initScroll(container);
}

