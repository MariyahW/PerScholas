
// const div1=document.createElement(`div`);
// const div2=document.createElement(`div`);

const div1=document.body.appendChild(document.createElement(`div`));
const div2= document.body.appendChild(document.createElement(`div`));

const ol=document.createElement(`ol`);
const ul=document.createElement(`ul`);

div1.appendChild(ol);
div2.appendChild(ul);

for(let i=0;i<3;i++){
    ol.appendChild(document.createElement(`li`));
    ul.appendChild(document.createElement(`li`));
}

