import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface DomeCanvasProps {
  color?: number;
}

const DomeCanvas: React.FC<DomeCanvasProps> = ({ color }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;

    // Fallback for Astro/React hydration timing
    if (width === 0 || height === 0) {
      width = 400;
      height = 400;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Simple geometry that definitely shows up
    const geometry = new THREE.IcosahedronGeometry(12, 2);
    const material = new THREE.MeshBasicMaterial({
      color: color || 0xF9E4D4,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    
    const dome = new THREE.Mesh(geometry, material);
    scene.add(dome);

    const animate = () => {
      requestAnimationFrame(animate);
      dome.rotation.y += 0.005;
      dome.rotation.x += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    
    // Force a resize check after a short delay to handle Astro layout
    setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [color]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default DomeCanvas;
