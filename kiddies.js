// // var new_li = document.createElement('li');
// // var anchor = document.createElement('a');
// // var new_ = document.getElementById('nav-bar').getElementsByTagName('ul')[0].getElementsByTagName('div')[0];
// // new_.appendChild(new_li);
// // new_li.appendChild(anchor);
// // anchor.innerHTML = 'Blog';

// // new_.insertBefore(new_li, new_.getElementsByTagName('li')[0]);

// // // To remove elements from the DOM
// // console.log(new_);
// // console.log(new_li);
// // var removed = new_.removeChild(new_li)


// var content = document.getElementById('content');
// var show_more =document.getElementById('show-more');

// show_more.onclick = function(){
//     if(content.className == "open"){
//         content.className = "";
//         show_more.innerHTML ="SHOW MORE"
//     } else{
//         content.className = "open";
//         show_more.innerHTML = "SHOW LESS";
//     }
// }

particlesJS.init({
    selector: '#particle-container',
    maxParticles: 200,
    size: { value:3,
        random:true

    },
    color:{
        value: '#ff0000'
    },
    shape: 'circle',
    opacity:{
        value: 0.5,
        random: true
    },
    speed:2

})

