'use client';

import { useEffect, useRef } from 'react';

export function HeroWebGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true });
    if (!gl) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple gradient shader
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
        
        // Breathing animation
        float breathe = sin(time * 0.5) * 0.1 + 0.9;
        
        // Create mesh gradient effect
        vec3 color1 = vec3(0.88, 0.92, 0.95); // Light blue
        vec3 color2 = vec3(0.98, 0.98, 0.97); // Cream
        vec3 color3 = vec3(0.92, 0.95, 0.98); // Light blue-grey
        
        // Smooth variation based on position
        float pattern = sin(uv.x * 3.0 + time * 0.2) * 0.5 + 0.5;
        pattern += sin(uv.y * 3.0 + time * 0.3) * 0.3;
        
        // Mouse interaction (gentle)
        vec2 mouseEffect = (mouse - vec2(0.5)) * 0.1;
        pattern += sin((uv.x + mouseEffect.x) * 2.0) * 0.2;
        pattern += sin((uv.y + mouseEffect.y) * 2.0) * 0.2;
        
        // Mix colors based on pattern
        vec3 col = mix(color1, color2, pattern);
        col = mix(col, color3, sin(uv.x + uv.y + time * 0.1) * 0.5 + 0.5);
        
        // Apply breathing effect
        col = col * breathe + 0.05;
        
        gl_FragColor = vec4(col, 0.6);
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

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    // Check for errors
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link failed:', gl.getProgramInfoLog(program));
      return;
    }

    // Create vertices
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
      mouseX = e.clientX / window.innerWidth;
      mouseY = 1.0 - e.clientY / window.innerHeight;
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
        opacity: 0.6
      }}
    />
  );
}
