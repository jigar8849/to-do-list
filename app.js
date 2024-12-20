let addTast=document.querySelector("#task");
let list={};
let ul=document.querySelector('#ull');
let ipp=document.querySelector("#input");



function add(){
    let ip=document.querySelector("#input");
    ip=ip.value;
    list[ip]=ip;
    console.log(list);

    let td1=document.createElement("li");
    td1.innerText=ip;
    ul.append(td1);

    document.querySelector('#input').value='';
}

ipp.addEventListener("keypress",()=>{
    add();
});


addTast.addEventListener("click",()=>{
   add();
});

