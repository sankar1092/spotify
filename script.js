window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(image/cover.jpg)";
    bannerImage.setAttribute("src", "image/image.jpg");
    bannerHeading.textContent = "Latest Tamil";
    bannerText.textContent = "Enjoy Your Day with the playlist";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="image/play-button.svg">';
        
        banner.style.backgroundImage = "url(image/cover.jpg)";
        bannerImage.setAttribute("src", "image/image.jpg");
        bannerHeading.textContent = "Latest Tamil";
        bannerText.textContent = "Enjoy Your Day with the playlist";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="image/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(image/b01.jpg)";
            bannerImage.setAttribute("src", "image/1.jpg");
            bannerHeading.textContent = "Naa Ready (From 'Leo')";
            bannerText.textContent = "By Anirudh Ravichandran";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(image/b02.jpg)";
            bannerImage.setAttribute("src", "image/2.jpg");
            bannerHeading.textContent = "Hukum - Thalaivar Alappara (From 'Jailer')";
            bannerText.textContent = "By Anirudh Ravichandran";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(image/b03.jpg)";
            bannerImage.setAttribute("src", "image/3.jpg");
            bannerHeading.textContent = "Kaavalaa (From 'Jailer)";
            bannerText.textContent = "By Anirudh Ravichandran";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(image/b04.jpg)";
            bannerImage.setAttribute("src", "image/4.jpg");
            bannerHeading.textContent = "Vandha Edam (From 'Jawan')";
            bannerText.textContent = "By Anirudh Ravichandran";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(image/b05.jpg)";
            bannerImage.setAttribute("src", "image/5.jpg");
            bannerHeading.textContent = "Glimpse of Antony Das (From 'Leo')";
            bannerText.textContent = "By Anirudh Ravichandran";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b06.png)";
            bannerImage.setAttribute("src", "images/image 6.png");
            bannerHeading.textContent = "Baarishein - Anuv Jain (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b07.png)";
            bannerImage.setAttribute("src", "images/image 7.png");
            bannerHeading.textContent = "Waqt Ki Baatein (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b08.png)";
            bannerImage.setAttribute("src", "images/image 8.png");
            bannerHeading.textContent = "Lovely feat. Anika Vidyarthi (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b09.png)";
            bannerImage.setAttribute("src", "images/image 9.png");
            bannerHeading.textContent = "Let me down slowly - Alec Benjamin (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.png)";
            bannerImage.setAttribute("src", "images/image 10.png");
            bannerHeading.textContent = "Jee Le Zara - (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="image/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="image/play-button.svg">';
    }
}