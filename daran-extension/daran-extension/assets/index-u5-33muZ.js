import{_ as o}from"./index-D1euVNta.js";async function l(t,r=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:a}=await o(()=>import("./RollUpdater-CFE1bZ4c.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new a},r)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RollUpdater-CFE1bZ4c.js","./index-D1euVNta.js","./index-CaOBZyWJ.css","./OptionsColor-BwYOurOy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
