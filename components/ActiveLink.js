import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

const ActiveLink = ({ href, children }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const linkRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(true);
    window.scrollTo(0, 0);
    router.push(href);
  };
  

  useEffect(() => {
    const handleRouteChange = (url) => {
      setIsActive(url === href);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      let activeSectionId = null;
      let activeSectionOffset = Infinity;

      sections.forEach((section) => {
        const id = section.getAttribute('id');
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop - 100 &&
          scrollPosition < offsetTop + offsetHeight - 90&&
          offsetTop < activeSectionOffset
        ) {
          activeSectionId = id;
          activeSectionOffset = offsetTop;
        }
      });

      setIsActive(href === `/#${activeSectionId}`);
    };

    handleScroll();

    router.events.on('routeChangeComplete', handleRouteChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [href]);

  useEffect(() => {
    setIsActive(router.asPath === href || router.asPath === `${href}/`);
  }, [router.asPath, href]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isActive) {
          setIsActive(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-50% 0% -50% 0%',
    });

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }

    return () => {
      if (linkRef.current) {
        observer.unobserve(linkRef.current);
      }
    };
  }, [isActive]);

  return (
    <span
      className={`nav-link ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      ref={linkRef}
    >
      {children}
    </span>
  );
};

export default ActiveLink;
