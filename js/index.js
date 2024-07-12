var imageList = Array.from(document.querySelectorAll('.item img'))
var lightContainer = document.querySelector('.light-container')
var CloseBtn = document.getElementById('close')
var light = document.querySelector('.light-item')
var nextBtn = document.getElementById('next')
var prevBtn = document.getElementById('prev');
var curentIndex;

for(var i =0 ; i < imageList.length ; i++){

            imageList[i].addEventListener('click' , function(e){

            curentIndex = imageList.indexOf( e.target );
            
            lightContainer.classList.replace('d-none' , 'd-flex')
            
            var currentSrc = e.target.getAttribute('src');

            light.style.backgroundImage = `url(${currentSrc})`
          
      })
}



function slide(step){
      curentIndex = curentIndex + step;

      if(curentIndex < 0){
            curentIndex = imageList.length - 1;
      }
      if(curentIndex == 6){
            curentIndex = 0
      }

      var currentSrc = imageList[curentIndex].getAttribute('src');
      light.style.backgroundImage = `url(${currentSrc})`;
}





// function prevSlide(){
//       curentIndex--;
//       if(curentIndex < 0){
//             curentIndex = imageList.length - 1;
//       }
      

//       var currentSrc = imageList[curentIndex].getAttribute('src');
//       light.style.backgroundImage = `url(${currentSrc})`;
// }


// function nextSlide(){
//       curentIndex++;
//       if(curentIndex == 6){
//             curentIndex = 0
//       }

//       var currentSrc = imageList[curentIndex].getAttribute('src');
//       light.style.backgroundImage = `url(${currentSrc})`;
// }

prevBtn.addEventListener('click' , function(){
      slide(-1)
})


nextBtn.addEventListener('click' , function(){
      slide(1)
})

 

CloseBtn.addEventListener('click' ,function(){
      closeSlide()
})


function closeSlide(){
      lightContainer.classList.replace('d-flex' , 'd-none')
} 



document.addEventListener('keyup' , function(e){
      if(e.key == "ArrowRight"){
            slide(1)
      }
      else if(e.key == "ArrowLeft"){
            slide(-1)
      }
      else if(e.key == "Escape"){
            closeSlide()
      }
})


document.addEventListener('click' , function(e){
      if(e.target== lightContainer){
            closeSlide()
      }
})
