window.onload = function() {
   let tekstas = "krabas";
   let tekstas2 = "skbubejimas";
   let tekstas3 = "meile";


   let raide = nulineRaide(tekstas2); 
   console.log(raide);
   let zodis = nulineRaide(tekstas); 
   console.log(zodis);
   let trecias = nulineRaide(tekstas3); 
   console.log(trecias);
}
function nulineRaide(zodis) {
    return  zodis[0];

}