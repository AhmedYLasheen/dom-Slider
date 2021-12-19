
var imgs =Array.from( document.querySelectorAll(" .item img ")) ;
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem =document.getElementById("lightBoxItem");
var nextBtn=document.getElementById("nextBtn");
var prevBtn=document.getElementById("prevBtn");
var closeBtn=document.getElementById("closeBtn");
var currentIndex=0;

for(var i= 0 ; i < imgs.length ; i++ )
{
  imgs[i].addEventListener("click", function(eventInfo){

    currentIndex=imgs.indexOf(eventInfo.target);

    var imgsrc =eventInfo.target.getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgsrc+")";
    lightBoxContainer.style.display = "flex";

  })
}


function nextSlide()
{
  currentIndex++;
  if (currentIndex == imgs.length)
  {
    currentIndex =0;
  };

  var imgsrc =imgs[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = "url("+imgsrc+")";
}



function prevSlide()
{
  currentIndex--;

  if (currentIndex < 0)
  {
    currentIndex =imgs.length -1 ;
  };

  var imgsrc =imgs[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = "url("+imgsrc+")";
}

nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);


function closeSlide()
{
  lightBoxContainer.style.display = "none";
}

closeBtn.addEventListener("click",closeSlide);



document.addEventListener("keydown",function(eventInfo)
{
  if(eventInfo.code =="ArrowRight"){

    nextSlide();
  }

});

document.addEventListener("keydown",function(eventInfo)
{
  if(eventInfo.code =="ArrowLeft"){

    prevSlide();
  }

});

document.addEventListener("keydown",function(eventInfo)
{
  if(eventInfo.code =="Escape"){

    closeSlide();
  }

});


