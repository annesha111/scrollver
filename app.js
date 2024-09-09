let body = document.querySelector('body')
let scrollPage = document.querySelector('.scroll')
let sub = document.querySelector('.sub')

window.addEventListener('scroll', function(){
    if(window.scrollY >300){
        let totalHeight = body.clientHeight;
        let innerHeight =this.window.innerHeight;
        let countHeight = totalHeight - innerHeight;
        let scrollPosition = window.scrollY;
        let scrollPercentage = Math.round((100 / countHeight) * scrollPosition);
        
        scrollPage.style.background= `conic-gradient(red, red ${scrollPercentage}%, green ${scrollPercentage}%)`;
        sub.innerHTML = scrollPercentage
      
        
    }
})

let nav = document.querySelector('nav');
let a = 0;
window.addEventListener('scroll',()=>{
    let b = window.scrollY;
    if( a > window.scrollY ){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')   
    }
    a = b;
});