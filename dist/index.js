"use strict";var R=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var F=R(function(er,c){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),Q=require('@stdlib/strided-base-reinterpret-complex128/dist'),U=require('@stdlib/math-base-special-floor/dist'),W=require('@stdlib/blas-base-zswap/dist').ndarray,_=32;function X(n,e,o,l,v,u,j,i,f,m,q){var t,r,x,b,y,w,s,g,z,E,p,h,a;if(i>0?t=j-u:t=u-j,t+=1,J([o,l])){for(g=q,z=0,p=u;z<t;z++,p+=i)y=f[g],y!==p&&W(n,e,l,v+p*o,e,l,v+y*o),g+=m;return e}if(r=Q(e,0),o*=2,l*=2,v*=2,x=U(n/_)*_,x!==0)for(E=0;E<x;E+=_)for(g=q,z=0,p=u;z<t;z++,p+=i){if(y=f[g],y!==p)for(w=v+p*o,s=v+y*o,h=E;h<E+_;h++)a=h*l,b=r[w+a],r[w+a]=r[s+a],r[s+a]=b,b=r[w+a+1],r[w+a+1]=r[s+a+1],r[s+a+1]=b;g+=m}if(x!==n)for(g=q,z=0,p=u;z<t;z++,p+=i){if(y=f[g],y!==p)for(w=v+p*o,s=v+y*o,h=x;h<n;h++)a=h*l,b=r[w+a],r[w+a]=r[s+a],r[s+a]=b,b=r[w+a+1],r[w+a+1]=r[s+a+1],r[s+a+1]=b;g+=m}return e}c.exports=X
});var K=R(function(vr,C){
var Y=require('@stdlib/blas-base-assert-is-layout/dist'),$=require('@stdlib/math-base-special-max/dist'),B=require('@stdlib/error-tools-fmtprodmsg/dist'),L=F();function D(n,e,o,l,v,u,j,i){var f,m,q,t,r;if(!Y(n))throw new TypeError(B('nullFx',n));if(n==="row-major"&&l<$(1,e))throw new RangeError(B('nullG4',e,l));if(i>0)m=1,r=v;else if(i<0)m=-1,r=v+(v-u)*i,f=v,v=u,u=f;else return o;return n==="column-major"?(q=1,t=l):(q=l,t=1),L(e,o,q,t,0,v,u,m,j,i,r)}C.exports=D
});var S=R(function(ur,M){
var N=F();function d(n,e,o,l,v,u,j,i,f,m,q){var t;return i<0?(q+=j*m,m*=-1,t=u,u=j,j=t,i=-1):(q+=u*m,i=1),N(n,e,o,l,v,u,j,i,f,m,q)}M.exports=d
});var G=R(function(ir,Z){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=K(),P=S();V(T,"ndarray",P);Z.exports=T
});var I=require("path").join,k=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),rr=G(),O,H=k(I(__dirname,"./native.js"));A(H)?O=rr:O=H;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
