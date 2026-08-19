import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uScroll;

  vec3 hash3(vec2 p) {
    vec3 q = vec3(dot(p, vec2(127.1, 311.7)),
                  dot(p, vec2(269.5, 183.3)),
                  dot(p, vec2(419.2, 371.9)));
    return fract(sin(q) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash3(i).x;
    float b = hash3(i + vec2(1.0, 0.0)).x;
    float c = hash3(i + vec2(0.0, 1.0)).x;
    float d = hash3(i + vec2(1.0, 1.0)).x;
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v += amp * noise(p);
      p *= 2.02;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 p = (uv - 0.5) * aspect;

    float t = uTime * 0.045;
    vec2 flow = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 - t + 4.7));
    float field = fbm(p * 2.1 + flow * 1.3 + vec2(0.0, uScroll * 0.6));

    vec2 m = (uMouse - 0.5) * aspect;
    float halo = exp(-dot(p - m, p - m) * 3.2);

    vec3 deep = vec3(0.035, 0.078, 0.114);
    vec3 forest = vec3(0.055, 0.192, 0.145);
    vec3 mint = vec3(0.176, 0.831, 0.659);

    vec3 col = mix(deep, forest, smoothstep(0.25, 0.85, field));
    col = mix(col, mint, smoothstep(0.62, 0.98, field) * 0.55);
    col += mint * halo * 0.16;

    float bands = smoothstep(0.48, 0.5, fract(field * 6.0 - uTime * 0.08)) * 0.035;
    col += mint * bands;

    float grain = hash3(uv * uResolution + fract(uTime)).x - 0.5;
    col += grain * 0.035;

    float vig = smoothstep(1.25, 0.25, length(p));
    col *= 0.55 + vig * 0.75;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const target = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uScroll: { value: 0 },
    }),
    [],
  );

  useFrame((state, delta) => {
    const mat = materialRef.current;
    if (!mat) return;
    target.current.set((state.pointer.x + 1) / 2, (state.pointer.y + 1) / 2);
    mouse.current.lerp(target.current, Math.min(1, delta * 2.5));
    uniforms.uTime.value += delta;
    uniforms.uMouse.value.copy(mouse.current);
    uniforms.uResolution.value.set(
      size.width * viewport.dpr,
      size.height * viewport.dpr,
    );
    if (typeof window !== "undefined") {
      const max = document.body.scrollHeight - window.innerHeight;
      uniforms.uScroll.value = max > 0 ? window.scrollY / max : 0;
    }

  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function ShaderScene() {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: false, powerPreference: "low-power" }}
      frameloop="always"
      orthographic
      camera={{ position: [0, 0, 1] }}
    >
      <ShaderPlane />
    </Canvas>
  );
}
