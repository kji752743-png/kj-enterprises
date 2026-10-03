"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function FabricCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsLowPower(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
    } catch {
      setIsLowPower(true);
      return;
    }

    const geometry = new THREE.PlaneGeometry(14, 8, 48, 32);
    const pos = geometry.attributes.position;
    const initialPositions = pos.clone();

    const material = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.4;
    mesh.rotation.z = 0.05;
    scene.add(mesh);

    let animationFrameId: number;
    let clock = new THREE.Clock();
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      const time = clock.getElapsedTime() * 0.6;

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      mesh.rotation.y = mouse.x * 0.3;
      mesh.rotation.x = -0.4 + mouse.y * 0.2;

      const posAttr = geometry.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const u = initialPositions.getX(i);
        const v = initialPositions.getY(i);
        const wave =
          Math.sin(u * 0.6 + time) * 0.35 +
          Math.cos(v * 0.8 + time * 0.8) * 0.25;
        posAttr.setZ(i, wave);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (isLowPower) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent pointer-events-none" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-80"
      aria-hidden="true"
    />
  );
}
