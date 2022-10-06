



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});









function slide(){
document.querySelector("#scroll")
.addEventListener("scroll",function(){
  var dim1 = document.querySelector(".slides").getBoundingClientRect();
  var prev = dim1.left;
  document.querySelector("#scroll")
  .addEventListener("scroll",function(){
  var dim2 = document.querySelector(".slides").getBoundingClientRect();
  var diff = prev - dim2.left
  prev = dim2.left
  document.querySelectorAll(".slides").forEach(function(every){
    every.style.transform = `skewX(${diff*0.2}deg)`
  })

  })
})
}



slide()
function effect (){
    
document.querySelectorAll(".slides")
.forEach(function(elem){
  var dim =  elem.getBoundingClientRect()

    elem.addEventListener("mousemove",function(dets){
       var dim = elem.getBoundingClientRect()
        this.children[1].style.clipPath = `circle(18% at ${dets.clientX - dim.left }px ${dets.clientY  - dim.top}px)`
    })
    elem.addEventListener("mouseleave",function(dets){
        
         this.children[1].style.clipPath = `circle(0% at ${dets.clientX - dim.left }px ${dets.clientY  - dim.top}px)`
     })
})
}
effect()


