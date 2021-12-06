const para=document.querySelector('p');
//console.log(para.innerText);
//para.innerText= 'must watch it';
//console.log(para.innerText);

const paras= document.querySelectorAll('p');
paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += " new management";
})
