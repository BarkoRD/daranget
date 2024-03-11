import{_ as o}from"./index-D1euVNta.js";async function d(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-BHjVye67.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RotateUpdater-BHjVye67.js","./index-D1euVNta.js","./index-CaOBZyWJ.css","./ValueWithRandom-CME2E2pC.js","./AnimationOptions-BSThJSe2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
