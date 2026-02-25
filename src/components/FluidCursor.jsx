import { useEffect } from "react";
import fluidCursor from "../hooks/useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <canvas
        id="fluid"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default FluidCursor;
