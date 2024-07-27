// app/components/Particles.tsx
'use client';

import { useEffect } from 'react';
import s from '@/app/_components/Particles.module.css'; // Create this CSS file to style particles

const path = "./";
// const path = document.body.id !== 'main' ? '../../img/' : '../img/';
const stars = [`${path}4.svg`, `${path}5.svg`, `${path}6.svg`];


const Particles = () => {
    useEffect(() => {
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;

        const bg = document.getElementById('background')!;
        
        const createParticle = () => {
            const particle = document.createElement('img');
            particle.style.position = 'absolute';
            particle.style.opacity = '0.8';
            particle.style.left = '0px';
            particle.style.top = '0px';
            particle.className = s.lol;

            const parent = document.createElement('picture').appendChild(particle);
            return [particle, parent];
        };

        const myFunction = () => {
            width = document.documentElement.clientWidth;
            height = document.documentElement.clientHeight;

            const [particle, parent] = createParticle();
            particle.src = stars[Math.floor(Math.random() * stars.length)];
            bg.appendChild(parent);

            void particle.offsetWidth;

            const randomX = Math.floor(Math.random() * width);
            const randomY = Math.floor(Math.random() * height);

            const destX = randomX > width ? width : randomX;
            const destY = randomY > height ? height : randomY;

            const distance = Math.sqrt(
                (destX - particle.offsetLeft) ** 2 + (destY - particle.offsetTop) ** 2
            );
            const duration = 0.5 + Math.min(distance / 500, 1);

            particle.style.transition = `transform ${duration}s ease-out, opacity ${duration}s ease-out, rotate ${duration}s ease-out`;
            particle.style.transform = `translate(${destX}px, ${destY}px) rotate(${Math.random() * 360}deg)`;
            particle.style.opacity = `0`;

            setTimeout(() => {
                bg.removeChild(parent);
            }, duration * 1000);
        };

        const intervalId = setInterval(myFunction, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return null;
};

export default Particles;
