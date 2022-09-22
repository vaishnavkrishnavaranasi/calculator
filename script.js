function clearing() {
    document.calci.txt.value = '';
    document.calci.txtresult.value = '';
  }
  function equaling() {
    try {
      var replaceing = {
        sin: "Math.sin",
        cos: "Math.cos",
        tan: "Math.tan",
        sec: "1/Math.cos",
        cot: "1/Math.tan",
        log10: "Math.log10",
        log: "Math.log",
        log2: "Math.log2",
        asin: "Math.asin",
        acos: "Math.acos",
        atan: "Math.atan",
        asec: "1/Math.acos",
      }
      var p = document.calci.txt.value.split(/(?<=[+|-|(])/);
      var x = "";
      for(let i=0; i <p.length;i++){
        var q = p[i].split(/(?<=[0])/);
        for(let j=0;j< q.length;j++){
if(q[j] == '0'){
    q[j]=""; }
else{
    break;}}
    var y = q.join('');
        x += y;
      }
      document.calci.txt.value = Math.round(eval(x.replace(/sin|asin|log10|cos|acos|tan|atan|log2|log|sec|asec|cosec|acosec|cot/gi,function(x) {
        return replaceing[x];
      })  .replace('√','Math.sqrt')
       .replace('^','**')) * 1000000) / 1000000 ;
      document.calci.txtresult.value = document.calci.txt.value;
    } catch (e) {
      alert(e);
      document.calci.txt.value = "Invalid";
    }
  }
  function scientific() {
    var p = document.querySelector('#backId').classList.toggle('cardsChange');
  }
  const mode = document.querySelector('.changemode');
  const frontmode = document.querySelectorAll('.calculator .btn');
  const results = document.querySelector('.results');
  // const backmode = document.querySelector('.back');

  mode.addEventListener('change',() =>{
    results.classList.toggle('lightMode');
    if(mode.checked == true){
      document.body.setAttribute("data-theme","light");
      for(let i=0; i<frontmode.length ; i++)
      {
        frontmode[i].setAttribute('data-theme',"light");
      }
    }else{
      document.body.setAttribute("data-theme","");
      for(let i=0; i<frontmode.length ; i++)
      {
        frontmode[i].setAttribute('data-theme',"");
      }
    }
  })