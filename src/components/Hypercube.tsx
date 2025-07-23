import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const toolLogos = [
  { name: 'Kubernetes', url: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg', color: 0x326CE5 },
  { name: 'Docker', url: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', color: 0x2496ED },
  { name: 'Terraform', url: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg', color: 0x7B42BC },
  { name: 'GCP', url: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', color: 0x4285F4 },
  { name: 'Grafana', url: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg', color: 0xF46800 },
  { name: 'Prometheus', url: 'https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg', color: 0xE6522C },
  { name: 'ArgoCD', url: 'https://www.vectorlogo.zone/logos/argoprojio/argoprojio-icon.svg', color: 0xEF7B4D },
  { name: 'Ansible', url: 'https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg', color: 0xEE0000 }
];

export default function Hypercube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    renderer?: THREE.WebGLRenderer;
    camera?: THREE.PerspectiveCamera;
    animationFrame?: number;
    techConstellation?: THREE.Group;
    sprites?: THREE.Sprite[];
    connections?: THREE.Line[];
    highlightIndex?: number;
    lastHighlightTime?: number;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(3, 2, 12); // Increased z-position to ensure visibility
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const techConstellation = new THREE.Group();
    scene.add(techConstellation);

    const createSphereVertices = (count: number, radius: number) => {
      const vertices = [];
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        vertices.push(new THREE.Vector3(x, y, z));
      }
      return vertices;
    };

    const vertices = createSphereVertices(toolLogos.length, 3.3); // Reduced radius to prevent clipping
    
    const textureLoader = new THREE.TextureLoader();
    const sprites: THREE.Sprite[] = [];

    vertices.forEach((vertex, i) => {
      if (toolLogos[i]) {
        const texture = textureLoader.load(
          toolLogos[i].url,
          () => {
            sprite.material.needsUpdate = true;
          },
          undefined,
          () => {
            console.warn(`Failed to load texture for ${toolLogos[i].name}`);
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const ctx = canvas.getContext('2d')!;
            
            ctx.fillStyle = `#${toolLogos[i].color.toString(16).padStart(6, '0')}`;
            ctx.beginPath();
            ctx.arc(64, 64, 50, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(toolLogos[i].name.slice(0, 3), 64, 70);
            
            const fallbackTexture = new THREE.CanvasTexture(canvas);
            sprite.material.map = fallbackTexture;
            sprite.material.needsUpdate = true;
          }
        );
        
        const material = new THREE.SpriteMaterial({ 
          map: texture, 
          transparent: true,
          alphaTest: 0.5,
          opacity: 1.0,
          color: 0xFFFFFF // Ensure original colors are preserved
        });
        
        const sprite = new THREE.Sprite(material);
        sprite.position.copy(vertex);
        sprite.scale.set(1.6, 1.6, 1.6); // Reduced scale to prevent clipping
        sprite.userData = {
          name: toolLogos[i].name,
          initialPosition: vertex.clone(),
          targetPosition: vertex.clone(),
          color: toolLogos[i].color,
          originalScale: 1.2,
          isHighlighted: false,
          rotationSpeed: 0.01 + Math.random() * 0.02
        };
        techConstellation.add(sprite);
        sprites.push(sprite);
      }
    });

    const connections: THREE.Line[] = [];
    const createConnections = () => {
      connections.forEach(line => techConstellation.remove(line));
      connections.length = 0;

      for (let i = 0; i < sprites.length; i++) {
        const connectionsPerSprite = Math.floor(Math.random() * 3) + 1;
        const availableTargets = sprites.filter((_, index) => index !== i);
        
        for (let j = 0; j < connectionsPerSprite; j++) {
          const targetIndex = Math.floor(Math.random() * availableTargets.length);
          const target = availableTargets[targetIndex];
          
          if (target && sprites[i].position.distanceTo(target.position) < 6) { // Adjusted distance
            const material = new THREE.LineBasicMaterial({
              color: new THREE.Color().lerpColors(
                new THREE.Color(sprites[i].userData.color),
                new THREE.Color(target.userData.color),
                0.5
              ),
              transparent: true,
              opacity: 0.15,
              linewidth: 2
            });
            
            const geometry = new THREE.BufferGeometry().setFromPoints([
              sprites[i].position.clone(),
              target.position.clone()
            ]);
            const line = new THREE.Line(geometry, material);
            line.userData = { sprite1: sprites[i], sprite2: target };
            connections.push(line);
            techConstellation.add(line);
          }
        }
      }
    };

    createConnections();

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const createDynamicLight = (color: number, position: THREE.Vector3) => {
      const light = new THREE.PointLight(color, 1, 20);
      light.position.copy(position);
      scene.add(light);
      return light;
    };

    const dynamicLights = [
      createDynamicLight(0x00BFFF, new THREE.Vector3(8, 4, 6)),
      createDynamicLight(0x8A2BE2, new THREE.Vector3(-6, -4, 8)),
      createDynamicLight(0xFF6B35, new THREE.Vector3(4, 8, -6))
    ];

    let time = 0;
    let highlightIndex = 0;
    let lastHighlightTime = 0;
    const highlightDuration = 3000;

    const animate = () => {
      const animationFrame = requestAnimationFrame(animate);
      sceneRef.current.animationFrame = animationFrame;
      
      time += 0.016;
      const currentTime = Date.now();

      if (currentTime - lastHighlightTime > highlightDuration) {
        if (sprites[highlightIndex]) {
          sprites[highlightIndex].userData.isHighlighted = false;
        }
        
        highlightIndex = (highlightIndex + 1) % sprites.length;
        lastHighlightTime = currentTime;
        
        if (sprites[highlightIndex]) {
          sprites[highlightIndex].userData.isHighlighted = true;
        }
      }

      sprites.forEach((sprite, index) => {
        const userData = sprite.userData;
        
        const floatX = Math.sin(time * 0.5 + index * 0.8) * 0.3;
        const floatY = Math.cos(time * 0.3 + index * 1.2) * 0.4;
        const floatZ = Math.sin(time * 0.7 + index * 0.6) * 0.3;
        
        userData.targetPosition.copy(userData.initialPosition);
        userData.targetPosition.add(new THREE.Vector3(floatX, floatY, floatZ));
        
        if (userData.isHighlighted) {
          const highlightOffset = new THREE.Vector3(0, 0, 1.5); // Reduced offset
          userData.targetPosition.add(highlightOffset);
          userData.targetScale = 2.0;
        } else {
          userData.targetScale = userData.originalScale;
        }
        
        sprite.position.lerp(userData.targetPosition, 0.05);
        sprite.scale.lerp(new THREE.Vector3(userData.targetScale, userData.targetScale, userData.targetScale), 0.08);
        
        sprite.rotation.z += userData.rotationSpeed;
      });

      connections.forEach(line => {
        const { sprite1, sprite2 } = line.userData;
        const positions = line.geometry.attributes.position.array as Float32Array;
        
        positions[0] = sprite1.position.x;
        positions[1] = sprite1.position.y;
        positions[2] = sprite1.position.z;
        positions[3] = sprite2.position.x;
        positions[4] = sprite2.position.y;
        positions[5] = sprite2.position.z;
        
        line.geometry.attributes.position.needsUpdate = true;
        
        const distance = sprite1.position.distanceTo(sprite2.position);
        (line.material as THREE.LineBasicMaterial).opacity = Math.max(0.05, 0.4 - distance * 0.05);
      });

      techConstellation.rotation.y += 0.003;
      techConstellation.rotation.x += 0.001;
      techConstellation.rotation.z += 0.002;

      dynamicLights.forEach((light, index) => {
        const lightTime = time + index * 2;
        light.position.x = Math.sin(lightTime * 0.5) * 8;
        light.position.y = Math.cos(lightTime * 0.3) * 6;
        light.position.z = Math.sin(lightTime * 0.7) * 10;
        light.intensity = 0.8 + Math.sin(lightTime * 2) * 0.3;
      });

      camera.position.x = 3 + Math.sin(time * 0.1) * 0.5;
      camera.position.y = 2 + Math.cos(time * 0.15) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      camera.position.x = 3 + mouseX * 0.5;
      camera.position.y = 2 + mouseY * 0.3;
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove, { passive: true });

    sceneRef.current = { 
      scene, 
      renderer, 
      camera, 
      techConstellation, 
      sprites, 
      connections,
      highlightIndex,
      lastHighlightTime
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      
      if (sceneRef.current.animationFrame) {
        cancelAnimationFrame(sceneRef.current.animationFrame);
      }
      
      sprites.forEach(sprite => {
        (sprite.material as THREE.SpriteMaterial).dispose();
        const material = sprite.material as THREE.SpriteMaterial;
        if (material.map) material.map.dispose();
      });
      
      connections.forEach(line => {
        line.geometry.dispose();
        (line.material as THREE.LineBasicMaterial).dispose();
      });
      
      dynamicLights.forEach(light => scene.remove(light));
      
      if (renderer) {
        renderer.dispose();
        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full absolute inset-0"
      style={{ 
        background: 'transparent',
        pointerEvents: 'auto',
        zIndex: 1
      }}
    />
  );
}