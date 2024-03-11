import{_ as i}from"./index-D1euVNta.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-CS7U3Iz-.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TiltUpdater-CS7U3Iz-.js","./index-D1euVNta.js","./index-CaOBZyWJ.css","./ValueWithRandom-CME2E2pC.js","./AnimationOptions-BSThJSe2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
