webpackHotUpdate(0,{37:function(e,n,i){"use strict";function t(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n.default=e,n}function o(){c=new d.Scene,l=new d.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e4),l.position.z=1e3,s=new d.BoxGeometry(200,200,200),f=new d.MeshBasicMaterial({color:16711680,wireframe:!0}),p=new d.Mesh(s,f),c.add(p),u=new d.WebGLRenderer({alpha:!0}),u.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(u.domElement)}function r(){requestAnimationFrame(r),p.rotation.x+=.01,p.rotation.y+=.02,u.render(c,l)}i(83);var a=i(92),d=t(a),w=function(e){console.log(e)};w("xxxx");var c,l,u,s,f,p;o(),r()}});