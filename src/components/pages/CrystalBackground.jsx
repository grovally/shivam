
import React, { useMemo } from "react";

export default function CrystalBackground() {
  const crystals = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: `crystal-${i}`,
      size: 220 + Math.random() * 220,
      left: Math.random() * 100,
      duration: 100 + Math.random() * 60,
      delay: Math.random() * -160,
      drift: -100 + Math.random() * 200,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      rotateZ: Math.random() * 360,
      opacity: 0.18 + Math.random() * 0.15,
    }));
  }, []);

  return (
    <div className="crystal-background">

      {crystals.map((crystal) => (
        <div
          key={crystal.id}
          className="crystal-shard"
          style={{
            left: `${crystal.left}%`,
            width: `${crystal.size}px`,
            height: `${crystal.size * 1.45}px`,
            "--duration": `${crystal.duration}s`,
            "--delay": `${crystal.delay}s`,
            "--drift": `${crystal.drift}px`,
            "--rx": `${crystal.rotateX}deg`,
            "--ry": `${crystal.rotateY}deg`,
            "--rz": `${crystal.rotateZ}deg`,
            "--opacity": crystal.opacity,
          }}
        >

          <div className="crystal-3d">

            <div className="crystal-main" />

            <div className="crystal-facet facet-left" />
            <div className="crystal-facet facet-right" />
            <div className="crystal-facet facet-center" />
            <div className="crystal-facet facet-bottom" />

            <div className="crystal-reflection reflection-one" />
            <div className="crystal-reflection reflection-two" />

          </div>

        </div>
      ))}

    </div>
  );
}

