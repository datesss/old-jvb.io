import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import Color from 'color';
import styles from '../assets/css/main.scss';

class Icos extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
      lightPosition: new THREE.Vector3(1, 1, 1),
      color: Color.rgb(100, 15, 20)
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        color: this.state.color.rotate(1).rgb(),
        lightPosition: new THREE.Vector3(
          this.state.lightPosition.x + 0.03,
          this.state.lightPosition.y + 0.03,
          this.state.lightPosition.z + 0.03,
        ),
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.015,
          this.state.cubeRotation.y + 0.03,
          0
        ),
      });
    };
  }

  render() {
    return (

      <mesh
        rotation={this.props.rotation}
        position={this.props.position}
      >
          <icosahedronGeometry
            radius={0}
            detail={1}
          />
        <meshLambertMaterial
          color={this.props.color.toString()}
          wireframe={this.props.wireframe}
        />
      </mesh>
  );
  }
}

export default Icos;
