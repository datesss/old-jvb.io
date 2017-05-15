import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {Motion, TransitionMotion, spring} from 'react-motion';
import styles from '../assets/css/main.scss';
import Three from '../three/index.jsx';
import LinksMenu from '../LinksMenu/LinksMenu.jsx';
class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    const skills = ['html','z-index','gradients','wild flowers','css','es6','bootstrap','react','dogs','http headers','the console', 'arrow functions', 'jQuery', 'node.js', 'moment.js'];
    const skillText = _.sample(skills);
    this.state = {
      name: 40,
      webdev: -400,
      skills,
      skill: [{text:skillText,width: 300, height: 40, top: 0, opacity: 1}]
    }
    this.newSkill = () => {
      this.setState((prevState) => ({
        skill: [{text:_.sample(_.without(this.state.skills,prevState.skill)), opacity: 1, top: 0} ]
      }))
    }
    this.willLeave = () => {
      return { opacity: spring(0), top: spring(30)};
    }
    this.handleClick = () => {
      this.setState((prevState) => ({
        name: prevState.name === 40 ? -400 : 40,
        webdev: prevState.webdev === 40 ? -400 : 40
      }))
      this.newSkill();
      this.refs.three.handleClick();
    }

  }

  render() {
    return (
    <div
      className={styles.Home}
      onClick={this.handleClick}>
      <Motion
        defaultStyle={{name: this.state.name, webdev: this.state.webdev}}
        style={{name: spring(this.state.name), webdev: spring(this.state.webdev)}}
        >
      {style => (
        <div>
        <h1 style={{right: style.name}}>Jake Brooks</h1>
        <h1 style={{right: style.webdev}}>Web Developer</h1>
        <h2>I love
          <TransitionMotion
           willLeave={this.willLeave}
           styles={this.state.skill.map(item => ({
             key: item.text,
             style: {
               opacity: item.opacity,
               top: item.top
            }
           }))}>
           {interpolatedStyles =>
             // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
             <div style={{position:'relative', display: 'inline', paddingLeft: 5}}>
               {interpolatedStyles.map(config => {
                 return <span className={styles.Skill} key={config.key}
                   style={{
                     opacity: config.style.opacity,
                     top: config.style.top}} >{config.key}</span>
               })}
             </div>
           }
         </TransitionMotion>
        </h2>
      </div>
      )}
    </Motion>
      <LinksMenu />
      <Three
        ref="three"
       />
    </div>
  )};
}

ReactDOM.render(<Home/>, document.getElementById('main'));
