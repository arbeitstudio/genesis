function processTooltips(){var e=Array.from(document.querySelectorAll("[data-tooltip]")).reduce((e,t)=>{var o=t.getAttribute("data-tooltip");return e[o]||(e[o]={transmitters:[],receivers:[]}),t.hasAttribute("data-tooltip-message")?e[o].transmitters.push(t):void 0===e[o].receiver?e[o].receiver=t:console.error("Multiple receivers for tooltip "+o),e},{});Object.values(e).forEach(({transmitters:e,receiver:o})=>{if(o){let t=o.textContent;e.forEach(e=>{e.addEventListener("mouseover",function(){o.textContent=e.getAttribute("data-tooltip-message")}),e.addEventListener("mouseout",function(){o.textContent=t})})}})}var genesis;void 0===genesis&&(genesis=313,console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"));processTooltips();