"use strict";var $=Object.create;var u=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var T=(t,o,n,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of w(o))!P.call(t,e)&&e!==n&&u(t,e,{get:()=>o[e],enumerable:!(s=v(o,e))||s.enumerable});return t};var l=(t,o,n)=>(n=t!=null?$(h(t)):{},T(o||!t||!t.__esModule?u(n,"default",{value:t,enumerable:!0}):n,t));var r=l(require("@actions/core")),g=require("semver"),m=l(require("os")),d=require("child_process"),f=`https://${process.env.GITHUB_ACTOR}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`,c=(t,o)=>new Promise((n,s)=>{r.debug(`> ${t} ${o.join(" ")}`);let e=(0,d.spawn)(t,o),p="",a=[];e.on("error",i=>{s(i)}),e.stderr.on("data",i=>{r.error(i.toString()),a.push(i)}),e.stdout.on("data",i=>{r.debug(i.toString()),p+=i.toString()}),e.on("exit",i=>{i===0?n(p.trim()):s(new Error(`${a.join("")}${m.default.EOL}${t} exited with code ${i}`))})}),B=async()=>{let o=(await c("git",["rev-list","HEAD"])).split(`
`);for(let n of o){let s=await c("git",["tag","--points-at",n]);for(let e of s.split(`
`))if((0,g.valid)(e))return e}return null},I=async()=>{let t=await B();if(!t){r.info("No previous tag found, skipping tag update");return}if((0,g.prerelease)(t)){r.info("Prerelease version detected; will not add a major version tag.");return}let o=[],n=r.getBooleanInput("major"),s=r.getBooleanInput("minor");n&&o.push((0,g.major)(t)),s&&o.push(`${(0,g.major)(t)}.${(0,g.minor)(t)}`);let e=await c("git",["show-ref","-s",t]);await Promise.all(o.map(async p=>{let a=`v${p}`.trim(),i=!!await c("git",["ls-remote",f,a]);i&&(r.info(`Deleting tag "${a}"`),await c("git",["push",f,`:refs/tags/${a}`])),i?r.info(`Moving tag "${a}" to ${e}`):r.info(`Creating new tag "${a}" on ${e}`),await c("git",["tag","--force",`${a}`,e])})),r.info("Pushing tags"),await c("git",["push",f,"--tags"])};try{I()}catch(t){r.setFailed(t.message)}
