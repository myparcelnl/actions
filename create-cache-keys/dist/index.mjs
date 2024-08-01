import*as r from"@actions/core";import{getInput as o}from"@actions/core";var i=e=>e.map(t=>t.trim()).filter(Boolean),p=e=>i(e.split(`
`)),l=e=>{let t=o("restore-keys");return t==="auto"?e:Number(t)},K=()=>{let e=o("key"),t=process.env.KEY_SEPARATOR??"-",c=p(o("input")??""),u=l(c.length),s=i([e??"",...c]),a=s.join(t),y=s.reduce((n,k,m)=>{if(n.length<u){let g=s.slice(0,-m-1);n.push(`${g.join(t)}${t}`)}return n},[]);r.setOutput("key",a),r.setOutput("restore-keys",i(y).join(`
`))};try{K()}catch(e){e instanceof Error&&r.setFailed(e.message)}
