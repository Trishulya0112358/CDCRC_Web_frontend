console.log('hello ');
document.querySelector('.iitlogo').addEventListener('click',el =>{
    document.location.href='index.html';
})

// document.querySelector('.nav-dots').addEventListener('click',el =>{
//     const spans = document.querySelector('.nav-dots').childNodes;
//     console.log(spans);
//     console.log(el.target.dataset.id);
//     el.target.classList.add('nav-dot-current');
//     const item = document.querySelector('.sb-slider').getElementsByTagName('img');
//     // item.forEach(e => {
//     //     e[e.target.dataset.id-1].parentElement.classList.remove('sub-current');
//     // });

//     for (let i=0;i<7;i++)
//     {
//         if(i!=el.target.dataset.id-1)
//         item[i].parentElement.classList.remove('sub-current');
//         else {
//             item[el.target.dataset.id-1].parentElement.classList.add('sub-current');
//         }
//     }
//     // item[el.target.dataset.id-1].parentElement.classList.add('sub-current');
//     // console.log(item[el.target.dataset.id-1]);
//     console.log(item[el.target.dataset.id-1].parentElement);
// });


