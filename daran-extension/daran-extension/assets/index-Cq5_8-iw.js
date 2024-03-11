import{_ as i}from"./index-D1euVNta.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-ChaGQC6d.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-ChaGQC6d.js","./ValueWithRandom-CME2E2pC.js","./AnimationOptions-BSThJSe2.js","./index-D1euVNta.js","./index-CaOBZyWJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
