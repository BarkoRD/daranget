import{_ as o}from"./index-BqM6DdVM.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async r=>{const{OutOfCanvasUpdater:e}=await o(()=>import("./OutOfCanvasUpdater-CyPMe7H_.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new e(r)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./OutOfCanvasUpdater-CyPMe7H_.js","./index-BqM6DdVM.js","./index-CaOBZyWJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
