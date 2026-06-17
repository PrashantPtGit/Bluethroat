'use client';

import { useEffect } from 'react';

export default function AnimationProvider() {
  useEffect(() => {
    // body.loaded triggers CSS reveal animations
    document.body.classList.add('loaded');

    // Reveal on scroll
    const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-delay]');
    if (revealEls.length > 0) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              revealObserver.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
    }

    // Video play/pause via IntersectionObserver
    const videoEls = document.querySelectorAll<HTMLVideoElement>('[data-bg-video], [data-content-video]');
    if (videoEls.length > 0) {
      const videoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const video = e.target as HTMLVideoElement;
            if (e.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.1 }
      );
      videoEls.forEach((el) => videoObserver.observe(el));
    }

    // Video parallax for sections with [data-parallax-video]
    const parallaxVideos = document.querySelectorAll<HTMLVideoElement>('[data-parallax-video]');
    let ticking = false;
    const handleParallax = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          parallaxVideos.forEach((video) => {
            const rect = video.closest('section')?.getBoundingClientRect();
            if (rect) {
              const py = ((rect.top / window.innerHeight) * 30).toFixed(2);
              (video as HTMLElement).style.setProperty('--py', `${py}px`);
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    if (parallaxVideos.length > 0) window.addEventListener('scroll', handleParallax, { passive: true });

    // 3D card tilt
    const tiltCards = document.querySelectorAll<HTMLElement>(
      '.problem__card, .package, .demo, .quote, .case__screen, .cred'
    );
    const tiltHandlers: Array<{ el: HTMLElement; over: (e: MouseEvent) => void; leave: () => void }> = [];
    tiltCards.forEach((card) => {
      const over = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
        const y = -((e.clientY - rect.top) / rect.height - 0.5) * 14;
        card.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${y}deg) translateZ(6px)`;
      };
      const leave = () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.55s cubic-bezier(0.19,1,0.22,1)';
        setTimeout(() => { card.style.transition = ''; }, 560);
      };
      card.addEventListener('mousemove', over);
      card.addEventListener('mouseleave', leave);
      tiltHandlers.push({ el: card, over, leave });
    });

    // Count-up animation for [data-count]
    const counters = document.querySelectorAll<HTMLElement>('[data-count]');
    if (counters.length > 0) {
      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const target = parseFloat(el.dataset.count || '0');
            const suffix = el.dataset.countSuffix || '';
            const prefix = el.dataset.countPrefix || '';
            const duration = 1400;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              const val = target * ease;
              el.textContent = prefix + (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            countObserver.unobserve(el);
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => countObserver.observe(el));
    }

    // Project index active link on work page
    const projLinks = document.querySelectorAll<HTMLAnchorElement>('.proj-index__link');
    if (projLinks.length > 0) {
      const cases = document.querySelectorAll<HTMLElement>('.case[id]');
      const projObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const id = e.target.id;
              projLinks.forEach((a) => {
                a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
              });
            }
          });
        },
        { rootMargin: '-40% 0px -50% 0px' }
      );
      cases.forEach((el) => projObserver.observe(el));
    }

    // Nav scroll class
    const nav = document.querySelector('.nav');
    const handleNavScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // Nav mobile toggle
    const toggle = document.querySelector('.nav__toggle');
    const handleToggle = () => document.body.classList.toggle('nav-open');
    toggle?.addEventListener('click', handleToggle);

    // Escape key closes nav
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') document.body.classList.remove('nav-open');
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('keydown', handleEscape);
      toggle?.removeEventListener('click', handleToggle);
      tiltHandlers.forEach(({ el, over, leave }) => {
        el.removeEventListener('mousemove', over);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return null;
}
