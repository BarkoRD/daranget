import{_ as i}from"./index-BqM6DdVM.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DgvtDX-3.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-DgvtDX-3.js","./ValueWithRandom-4arkMkfX.js","./AnimationOptions-CoSRs1ZY.js","./index-BqM6DdVM.js","./index-CaOBZyWJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
