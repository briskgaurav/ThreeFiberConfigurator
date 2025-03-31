import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function Model({color}) {
  const data = useGLTF("/hot.glb");
  const { nodes, materials, scene } = data;
  console.log(data);

  return (
    <group
      position={[0, -1, 0]}
      rotation={[-Math.PI / 2, 0, -Math.PI]}
      castShadow
    >
      {/* Interior */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={nodes.Object_2.material}
      />

      {/* Bottom */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={nodes.Object_3.material}
      />

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
          metalness={0}
          roughness={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Wheels Rims */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={nodes.Object_5.material}
      />

      {/* WHEELS RUBBER */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={nodes.Object_6.material}
      >
        {/* <meshStandardMaterial
          color={"red"}
          roughness={0.6}
          side={THREE.DoubleSide}
        /> */}
      </mesh>

      {/* MIRRORS  & HEADLIGHTS */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={nodes.Object_7.material}
      >
        {/* <meshStandardMaterial
          color={"green"}
          roughness={0.6}
          side={THREE.DoubleSide}
        /> */}
      </mesh>

      {/* WHEEL METAL RIMS */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={nodes.Object_8.material}
      >
        {/* <meshStandardMaterial color={"blue"} /> */}
      </mesh>
    </group>
  );
}

export default Model;
