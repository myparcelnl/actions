import*as s from"@actions/core";var o=e=>e.map(r=>r.trim()).filter(Boolean),c=e=>o(e.split(`
`)),g=e=>process.env.RESTORE_KEYS==="auto"?e:Number(process.env.RESTORE_KEYS),m=()=>{let e=process.env.KEY_SEPARATOR??"-",r=c(process.env.INPUT??""),i=g(r.length),t=o([process.env.KEY??"",...c(process.env.INPUT??"")]),a=t.join(e),u=t.reduce((n,l,p)=>{if(n.length<i){let y=t.slice(0,-p-1);n.push(`${y.join(e)}${e}`)}return n},[]);s.setOutput("key",a),s.setOutput("restore-keys",o(u).join(`
`))};try{m()}catch(e){e instanceof Error&&s.setFailed(e.message)}
