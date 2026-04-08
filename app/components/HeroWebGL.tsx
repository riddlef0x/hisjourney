'use client';

import { useEffect, useRef } from 'react';

export function HeroWebGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true, antialias: true });
    if (!gl) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced gradient shader with mesh effect
    const vertexShader = `#version 300 es
      precision highp float;
      in vec2 position;
      
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `#version 300 es
      precision highp float;
      uniform float time;
      uniform vec2 mouse;
      uniform vec2 resolution;
      
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        
        // Cream base color: #F5F5F0
        vec3 colorCream = vec3(0.961, 0.961, 0.941);
        
        // Soft sage green: #3D5C4F
        vec3 colorSage = vec3(0.239, 0.361, 0.310);
        
        // Gentle breathing animation
        float breathe = sin(time * 0.3) * 0.05 + 0.85;
        
        // Mesh gradient pattern
        float meshX = sin(uv.x * 2.5 + time * 0.1) * 0.5 + 0.5;
        float meshY = sin(uv.y * 2.0 + time * 0.15) * 0.5 + 0.5;
        float mesh = meshX * meshY;
        
        // Additional wave patterns
        float wave1 = sin((uv.x + uv.y) * 3.0 + time * 0.2) * 0.5 + 0.5;
        float wave2 = cos((uv.x - uv.y) * 2.5 + time * 0.25) * 0.5 + 0.5;
        
        // Blend meshes
        float pattern = mix(mesh, wave1, 0.4);
        pattern = mix(pattern, wave2, 0.3);
        
        // Subtle mouse influence
        vec2 mouseEffect = (mouse - vec2(0.5)) * 0.08;
        pattern += sin((uv.x + mouseEffect.x) * 2.0 + time * 0.1) * 0.15;
        pattern += sin((uv.y + mouseEffect.y) * 2.0 + time * 0.15) * 0.15;
        
        // Mix colors based on pattern
        vec3 col = mix(colorCream, colorSage, pattern * 0.6);
        
        // Apply breathing effect
        col = col * breathe + vec3(0.08, 0.08, 0.08);
        
        // Gradient overlay (more sage on bottom-right)
        vec3 gradientOverlay = mix(vec3(1.0), colorSage * 0.15, uv.x * 0.3 + uv.y * 0.2);
        col = col + gradientOverlay * 0.2;
        
        gl_FragColor = vec4(col, 0.7);
      }
    `;

    // Create shader program
    const program = gl.createProgram()!;
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;

    gl.shaderSource(vs, vertexShader);
    gl.shaderSource(fs, fragmentShader);
    gl.compileShader(vs);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
      console.error('Vertex shader error:', gl.getShaderInfoLog(vs));
      return;
    }

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error('Fragment shader error:', gl.getShaderInfoLog(fs));
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    // Check for errors
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link failed:', gl.getProgramInfoLog(program));
      return;
    }

    // Create vertices (full screen quad)
    const vertices = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      1, 1
    ]);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);

    // Uniforms
    const timeLoc = gl.getUniformLocation(program, 'time');
    const mouseLoc = gl.getUniformLocation(program, 'mouse');
    const resolutionLoc = gl.getUniformLocation(program, 'resolution');

    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = Math.min(1, Math.max(0, e.clientX / window.innerWidth));
      mouseY = Math.min(1, Math.max(0, 1.0 - e.clientY / window.innerHeight));
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      time += 0.016; // ~60fps
      
      gl.uniform1f(timeLoc, time);
      gl.uniform2f(mouseLoc, mouseX, mouseY);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.8
      }}
    />
  );
}
