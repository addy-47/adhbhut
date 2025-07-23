
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { gsap } from 'gsap';

const toolLogos = [
  { name: 'Kubernetes', url: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg' },
  { name: 'Docker', url: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
  { name: 'Terraform', url: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg' },
  { name: 'GCP', url: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
  { name: 'Grafana', url: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg' },
  { name: 'Prometheus', url: 'https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg' },
  { name: 'ArgoCD', url: 'https://www.vectorlogo.zone/logos/argoprojio/argoprojio-icon.svg' },
  { name: 'Helm', url: 'https://www.vectorlogo.zone/logos/helm_sh/helm_sh-icon.svg' }
];

export default function Hypercube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    renderer?: THREE.WebGLRenderer;
    camera?: THREE.PerspectiveCamera;
    composer?: EffectComposer;
    animationFrame?: number;
    tesseractGroup?: THREE.Group;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    // Position camera for optimal viewing
    camera.position.set(0, 0, 8);

    // Renderer with completely transparent background
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      premultipliedAlpha: false
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    
    // Post-processing for glow effects
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight), 
      2.5, 
      0.8, 
      0.9
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 2.0;
    bloomPass.radius = 0.3;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Create floating tech constellation
    const tesseractGroup = new THREE.Group();
    tesseractGroup.position.set(0, 0, 0);
    scene.add(tesseractGroup);

    // Create vertices in a more spread out 3D formation
    const vertices = [
      new THREE.Vector3(4, 3, 2), new THREE.Vector3(4, 3, -2),
      new THREE.Vector3(4, -3, 2), new THREE.Vector3(4, -3, -2),
      new THREE.Vector3(0, 3, 2), new THREE.Vector3(0, 3, -2),
      new THREE.Vector3(0, -3, 2), new THREE.Vector3(0, -3, -2)
    ];
    
    const logoSprites = new THREE.Group();
    tesseractGroup.add(logoSprites);

    // Create floating logo sprites
    const textureLoader = new THREE.TextureLoader();
    const sprites: THREE.Sprite[] = [];
    
    vertices.forEach((vertex, i) => {
      if (toolLogos[i]) {
        const texture = textureLoader.load(toolLogos[i].url);
        const material = new THREE.SpriteMaterial({ 
          map: texture, 
          transparent: true, 
          alphaTest: 0.5,
          opacity: 0.9
        });
        const sprite = new THREE.Sprite(material);
        sprite.position.copy(vertex);
        sprite.scale.set(1.8, 1.8, 1.8);
        sprite.userData.name = toolLogos[i].name;
        sprite.userData.initialPosition = vertex.clone();
        sprite.userData.floatOffset = Math.random() * Math.PI * 2;
        logoSprites.add(sprite);
        sprites.push(sprite);
      }
    });

    // Create dynamic connecting lines
    const connectionLines: THREE.Line[] = [];
    const createConnections = () => {
      // Clear existing lines
      connectionLines.forEach(line => tesseractGroup.remove(line));
      connectionLines.length = 0;

      // Create lines between nearby sprites
      for (let i = 0; i < sprites.length; i++) {
        for (let j = i + 1; j < sprites.length; j++) {
          const distance = sprites[i].position.distanceTo(sprites[j].position);
          if (distance < 7) {
            const material = new THREE.LineBasicMaterial({
              color: Math.random() > 0.5 ? 0x00BFFF : 0x8A2BE2,
              transparent: true,
              opacity: 0.4 + Math.random() * 0.3,
            });
            
            const geometry = new THREE.BufferGeometry().setFromPoints([
              sprites[i].position.clone(),
              sprites[j].position.clone()
            ]);
            const line = new THREE.Line(geometry, material);
            connectionLines.push(line);
            tesseractGroup.add(line);
          }
        }
      }
    };

    createConnections();

    // Minimal ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    // Dynamic point lights
    const pointLight1 = new THREE.PointLight(0x00BFFF, 2, 25);
    pointLight1.position.set(8, 8, 8);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x8A2BE2, 2, 25);
    pointLight2.position.set(-8, -8, 8);
    scene.add(pointLight2);

    // Enhanced floating animation
    const animateFloat = () => {
      sprites.forEach((sprite) => {
        const time = Date.now() * 0.001;
        const floatY = Math.sin(time + sprite.userData.floatOffset) * 0.4;
        const floatX = Math.cos(time * 0.8 + sprite.userData.floatOffset) * 0.3;
        const floatZ = Math.sin(time * 0.6 + sprite.userData.floatOffset) * 0.3;
        
        sprite.position.copy(sprite.userData.initialPosition);
        sprite.position.y += floatY;
        sprite.position.x += floatX;
        sprite.position.z += floatZ;
      });
      
      // Update connection lines
      connectionLines.forEach((line, index) => {
        const positions = line.geometry.attributes.position.array as Float32Array;
        if (sprites[Math.floor(index / 2)] && sprites[Math.floor(index / 2) + 1]) {
          const sprite1 = sprites[Math.floor(index * 0.3) % sprites.length];
          const sprite2 = sprites[Math.floor(index * 0.7) % sprites.length];
          
          if (sprite1 && sprite2) {
            positions[0] = sprite1.position.x;
            positions[1] = sprite1.position.y;
            positions[2] = sprite1.position.z;
            positions[3] = sprite2.position.x;
            positions[4] = sprite2.position.y;
            positions[5] = sprite2.position.z;
            line.geometry.attributes.position.needsUpdate = true;
          }
        }
      });
    };

    // Continuous rotation with floating
    gsap.to(tesseractGroup.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 4,
      z: Math.PI * 2,
      duration: 50,
      repeat: -1,
      ease: "none"
    });

    // Animation loop
    function animate() {
      const animationFrame = requestAnimationFrame(animate);
      sceneRef.current.animationFrame = animationFrame;
      
      animateFloat();
      
      // Gentle additional rotation
      tesseractGroup.rotation.x += 0.001;
      tesseractGroup.rotation.y += 0.002;
      tesseractGroup.rotation.z += 0.0008;
      
      composer.render();
    }

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      composer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Store references for cleanup
    sceneRef.current = { scene, renderer, camera, composer, tesseractGroup };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current.animationFrame) {
        cancelAnimationFrame(sceneRef.current.animationFrame);
      }
      if (renderer) {
        renderer.dispose();
        if (container && renderer.domElement) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{ 
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  );
}
