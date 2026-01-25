import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DomeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 35;
    camera.position.y = 8;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create dome geometry (half sphere with wireframe)
    const baseGeometry = new THREE.IcosahedronGeometry(12, 3);
    const wireframeGeometry = new THREE.WireframeGeometry(baseGeometry);

    // Check for dark mode
    const isDarkMode = document.documentElement.classList.contains('dark');

    const material = new THREE.LineBasicMaterial({
      color: isDarkMode ? 0xffffff : 0x1a1a1a,
      transparent: true,
      opacity: 0.6,
    });

    const dome = new THREE.LineSegments(wireframeGeometry, material);
    scene.add(dome);

    // Line tracing animation setup
    const totalVertices = wireframeGeometry.attributes.position.count;
    let currentDrawCount = 0;
    const drawSpeed = prefersReducedMotion ? totalVertices : 15; // Instant if reduced motion

    wireframeGeometry.setDrawRange(0, prefersReducedMotion ? totalVertices : 0);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      if (!prefersReducedMotion) {
        // Slow rotation
        dome.rotation.y += 0.002;
        dome.rotation.x = Math.sin(time * 0.5) * 0.1;

        // Line tracing effect
        if (currentDrawCount < totalVertices) {
          currentDrawCount += drawSpeed;
          if (currentDrawCount > totalVertices) currentDrawCount = totalVertices;
          wireframeGeometry.setDrawRange(0, currentDrawCount);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;

      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    // Handle theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          material.color.setHex(isDark ? 0xffffff : 0x1a1a1a);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      wireframeGeometry.dispose();
      baseGeometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default DomeCanvas;
