import*as t from"@actions/core";import{major as p,minor as u,prerelease as l,valid as m}from"semver";import d from"node:os";import{spawn as $}from"node:child_process";var f=`https://${process.env.GITHUB_ACTOR}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`,s=(o,n)=>new Promise((g,a)=>{t.debug(`> ${o} ${n.join(" ")}`);let e=$(o,n),c="",i=[];e.on("error",r=>{a(r)}),e.stderr.on("data",r=>{t.error(r.toString()),i.push(r)}),e.stdout.on("data",r=>{t.debug(r.toString()),c+=r.toString()}),e.on("exit",r=>{r===0?g(c.trim()):a(new Error(`${i.join("")}${d.EOL}${o} exited with code ${r}`))})}),v=async()=>{let n=(await s("git",["rev-list","HEAD"])).split(`
`);for(let g of n){let a=await s("git",["tag","--points-at",g]);for(let e of a.split(`
`))if(m(e))return e}return null},w=async()=>{let o=await v();if(!o){t.info("No previous tag found, skipping tag update");return}if(l(o)){t.info("Prerelease version detected; will not add a major version tag.");return}let n=[],g=t.getBooleanInput("major"),a=t.getBooleanInput("minor");g&&n.push(p(o)),a&&n.push(`${p(o)}.${u(o)}`);let e=await s("git",["show-ref","-s",o]);await Promise.all(n.map(async c=>{let i=`v${c}`.trim(),r=!!await s("git",["ls-remote",f,i]);r&&(t.info(`Deleting tag "${i}"`),await s("git",["push",f,`:refs/tags/${i}`])),r?t.info(`Moving tag "${i}" to ${e}`):t.info(`Creating new tag "${i}" on ${e}`),await s("git",["tag","--force",`${i}`,e])})),t.info("Pushing tags"),await s("git",["push",f,"--tags"])};try{w()}catch(o){o instanceof Error&&t.setFailed(o.message)}
