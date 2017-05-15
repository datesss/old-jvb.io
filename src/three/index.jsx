import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import {Motion, spring} from 'react-motion';
import ReactDOM from 'react-dom';
import Color from 'color';
import _ from 'lodash';
import styles from '../assets/css/main.scss';
import Icos from './ico.jsx';

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);
    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
      lightPosition: new THREE.Vector3(1, 1, 1),
      color: Color.rgb(100, 15, 20),
      springAmount: 1,
      wireframe: true,
      fov: 75
    };

    this.handleClick = () => {
      console.log
      this.setState((prevState) => ({
        springAmount: prevState.springAmount === 1 ? 0 : 1
      }))
    }

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      var r = Date.now() * 0.0025;
      this.setState({
        fov: 65 + 10 * Math.sin( 0.5 * r ),
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
        )
      });
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        //wireframe: !prevState.wireframe
      }))
    }, 2500)
  }
  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    const alpha = true;
    const lightPosition = this.state.lightPosition;
    const manyIcos = _.times(10, (index) => {
      return (
      <Motion
        key={index}
        defaultStyle={{x: 0, y:0, z:0}}
        style={{
          y:  0,
          x: spring((index-5) * this.state.springAmount * 5),
          z: spring(this.state.springAmount * 3)
        }}
      >
      {value => (<Icos
      key={index}
      wireframe={this.state.wireframe}
      rotation={this.state.cubeRotation}
      color={this.state.color}
      position={new THREE.Vector3(value.x,value.y,value.z)}
      />)}
      </Motion>
    )})
    return (
      <div
        className={styles.Three}
      >
      <React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}
      alpha={alpha}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={this.state.fov}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <ambientLight
        />
        <spotLight
          position={lightPosition}
          rotation={this.state.cubeRotation}
        />
        {manyIcos}
      </scene>
    </React3>
  </div>);
  }
}

export default Simple;
