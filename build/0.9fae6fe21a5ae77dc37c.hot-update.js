webpackHotUpdate(0,{37:function(e,n,i){"use strict";function t(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n.default=e,n}function o(){s=new w.Scene,u=new w.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e4),u.position.z=1e3,f=new w.BoxGeometry(200,200,200),h=new w.MeshBasicMaterial({color:16711680,wireframe:!0}),p=new w.Mesh(f,h),s.add(p),l=new w.WebGLRenderer({alpha:!0}),l.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(l.domElement)}function r(){l.setSize(window.innerWidth,window.innerHeight)}function a(){requestAnimationFrame(a),p.rotation.x+=.01,p.rotation.y+=.02,l.render(s,u)}i(83);var d=i(92),w=t(d),c=function(e){console.log(e)};c("xxxx");var s,u,l,f,h,p;o(),a(),window.addEventListener("resize",r,!1)}});