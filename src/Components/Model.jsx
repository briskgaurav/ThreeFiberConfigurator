import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import gsap, { Expo } from "gsap";

function Model({ color, Visible , Wheels, color2}) {
  const data = useGLTF("/hot.glb");
  const { nodes, materials, scene } = data;
  // console.log(data);

  const { camera } = useThree();

  useGSAP(() => {
    if (Visible) {
      gsap.to(camera.position, {
        x: 45,
        y: 0,
        z:40,
        delay: 0.3,
        duration: 2,
        ease: Expo.easeInOut,
      });
    } 
    else if(Wheels){
      gsap.to(camera.position, {
        x: -30,
        y: 0,
        z: 10,
        delay: 0.3,
        duration: 2,
        ease: Expo.easeInOut,
      });
    }
     else {
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 40,
        delay: 0.3,
        duration: 2,
        ease: Expo.easeInOut,
      });
    }
  }, [Visible, camera, Wheels]);

  return (
    <group
      position={[0, -1, 0]}
      rotation={[-Math.PI / 2, 0, THREE.MathUtils.degToRad(-120)]}
      castShadow
    >
      {/* Interior */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={nodes.Object_2.material}
      ></mesh>

      {/* Bottom */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={nodes.Object_3.material}
      >
        <meshStandardMaterial
          {...nodes.Object_3.material}
          roughness={0.5}
          metalness={1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* MainBody */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={nodes.Object_4.material}
      >
        {" "}
        <meshStandardMaterial
          {...nodes.Object_4.material}
          color={color}
          metalness={0.6}
          roughness={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Wheels Rims */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={nodes.Object_5.material}
      >
        <meshStandardMaterial color={color2} metalness={0.9} roughness={0.3} />
      </mesh>

      {/* WHEELS RUBBER */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={nodes.Object_6.material}
      >
        <meshStandardMaterial
          {...nodes.Object_6.material}
          roughness={1}
          metalness={0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* MIRRORS  & HEADLIGHTS */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={nodes.Object_7.material}
      >
        <meshPhysicalMaterial
          color={color2}
          metalness={1}
          roughness={0.05}
          transmission={0.6}
          transparent={true}
          clearcoat={1}
          clearcoatRoughness={0}
          opacity={0.5}
        />
      </mesh>

      {/* WHEEL METAL RIMS */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={nodes.Object_8.material}
      />
    </group>
  );
}

export default Model;
