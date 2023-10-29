// const weightInput=document.getElementById('weightInput').value;
// const heightInput=document.getElementById('heightInput').value;
const button=document.getElementById('button');
const infoResult=document.getElementById('infoResult');      

    // let weight=Number(weightInput);
    // let height=Number(heightInput);
    
function calculateBMI(){
    const weightInput=document.getElementById('weightInput').value;
    const heightInput=document.getElementById('heightInput').value;

    let result=weightInput / Math.pow( heightInput,2 );
    let result2=Math.round(result * 1000000.0) / 100.0
    console.log(result2);
    infoResult.innerHTML=result2;
}
button.addEventListener('click',calculateBMI);


