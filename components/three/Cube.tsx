import { MeshStandardMaterialProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";

function Cube() {
  const ref = useRef<MeshStandardMaterialProps>();
  useEffect(() => {
    // console.log(ref);
    // const normalMap = new TextureLoader().load("/cube_normal_map.png");
    // const normalMap = new TextureLoader().load("/face_normal_map.jpeg");
    // const normalMap = new TextureLoader().load("/normal_map.jpeg");
    // const normalMap = new TextureLoader().load("/normal_map_2");
    // const normalMap = new TextureLoader().load("/normal_map_3.jpeg");
    // const normalMap = new TextureLoader().load("/flakes_normal_map.jpeg");
    // const normalMap = new TextureLoader().load("/metal_normal_map.jpeg");
    const normalMap = new TextureLoader().load("/strange_normal_map.jpg");
    ref.current.material.normalMap = normalMap;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={0x5b1985} />
    </mesh>
  );
}

export default Cube;
