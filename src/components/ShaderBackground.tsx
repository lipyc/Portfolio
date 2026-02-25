import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
      }}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
    animate="on"
    type="waterPlane"
    wireframe={true}
    shader="positionMix"
    uTime={3.4}
    uSpeed={0.2}
    uStrength={0.5}
    uDensity={1.3}
    uFrequency={1.4}
    uAmplitude={3.4}
    positionX={0.7}
    positionY={0}
    positionZ={0}
    rotationX={60}
    rotationY={0}
    rotationZ={30}
    color1="#03001d"
    color2="#00002c"
    color3="#b3006e"
    reflection={0.4}

    // View (camera) props
    cAzimuthAngle={200}
    cPolarAngle={10}
    cDistance={3}
    cameraZoom={8.5}

    // Effect props
    lightType="3d"
    brightness={1}
    envPreset="city"
    grain="off"

    // Tool props
    toggleAxis={false}
    zoomOut={false}
    hoverState=""

    // Optional - if using transition features
    enableTransition={false}
  />
</ShaderGradientCanvas>
  );
}
