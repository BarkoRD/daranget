import{_ as o}from"./index-gsKB3Mou.js";async function d(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-7XPf4EFS.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new r(e)},a)}export{d as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./WobbleUpdater-7XPf4EFS.js","./index-gsKB3Mou.js","./index-CaOBZyWJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
