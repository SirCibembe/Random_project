let etudiant=["Larson","Magene","Ezechiel", "Patrice", "Lievin", "Espoir",
"Firmin","Landry", "Christian","Gerard","Blessing", "Julien"],
  verbs=["etudie","mange","dort", "fuit", "ment", "aide","travaille",
"s'habille"],
  complement=['durement','paisiblement','intelligemment','subtillement',
'faussement','elegemment','courageusement','paresseusement'];
function phrase (nom, verbe, compl){
  let index1=0, index2=0, index3=0, result='';
  index1=Math.floor((Math.random())*(nom.length));
  index2=Math.floor((Math.random())*(verbe.length));
  index3=Math.floor((Math.random())*(compl.length));
  return result=(nom[index1]+' '+ verbe[index2]+' '+compl[index3])
}
console.log(phrase(etudiant, verbs, complement));