import { MeshStandardMaterialProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3, TextureLoader } from "three";

type Props = {
  position: number[];
  rotationAxis: Vector3;
  radius: number;
  color: number;
};

function Sphere({ position, rotationAxis, radius, color = 0x5b1985 }: Props) {
  // TODO: Check this type is correct
  const ref = useRef<MeshStandardMaterialProps>();

  useEffect(() => {
    const normalMap = new TextureLoader().load("old_face_normal_map.jpeg");
    ref.current.material.normalMap = normalMap;
  }, []);

  useFrame((state, delta) => {
    const pivot = new Vector3(0, 0, 0);
    const axis = rotationAxis.normalize();
    const angle = 0.01;

    ref.current.position.sub(pivot); // remove the offset
    ref.current.position.applyAxisAngle(axis, angle); // rotate the POSITION
    ref.current.position.add(pivot); // re-add the offset

    ref.current.rotateOnAxis(axis, angle); // rotate the OBJECT
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshStandardMaterial color={color} />
      {/* <meshStandardMaterial color={0x399fdb} /> */}
    </mesh>
  );
}

export default Sphere;
