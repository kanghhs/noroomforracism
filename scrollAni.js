let windowwidth;
let windowheight;

let scrollY = 0;
let relativeScrollY = 0;
let totalScrollHeight = 0;
let currentScene = 0;
let calAnimationVal = 0;

let prevDurations = 0;
let pixelDuration = 0;

let animationKeyframes = [
    { //textBox1 0
        animationVal:{
            opacity:[1, 0],
            textBox1:[0, -300],
            imgBox1:[0, -1920],
            imgBox2:[0, 1920],
            textBox2:[0, 300]
        }
    },
    { //video in 1
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //video1 2
        animationVal:{
            time:[0, 3]
        }
    },
    { //video2 3
        animationVal:{
            time:[3, 6]
        }
    },
    { //video3 4
        animationVal:{
            time:[6, 9]
        }
    },
    { //video4 5
        animationVal:{
            time:[9, 12]
        }
    },
    { //video5 6
        animationVal:{
            time:[12, 15]
        }
    },
    { //video6 7
        animationVal:{
            time:[15, 20]
        }
    },
     { //video7 8
        animationVal:{
            time:[20, 23]
        }
    },
    { //video8 9
        animationVal:{
            time:[23, 26]
        }
    },
    { //video8 10
        animationVal:{
            time:[26, 30]
        }
    },
    { //video out 11
        animationVal:{
            opacity:[1, 0]
        }
    },
    { //collage1 in 12
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage2 in 13
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage3 in 14
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage4 in 15
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage5 in 16
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage6 in 17
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage7 in 18
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage8 in 19
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage9 in 20
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage10 in 21
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //collage10 in 22
        animationVal:{
            opacity:[0, 1]
        }
    },
    { //video1 23
        animationVal:{
            time:[0, 3]
        }
    },
    { //video1 24
        animationVal:{
            time:[3, 6]
        }
    },
    { //video1 25
        animationVal:{
            time:[6, 9]
        }
    },
    { //video1 25
        animationVal:{
            time:[9, 12]
        }
    },

    { //video1 25
        animationVal:{
            time:[12, 15]
        }
    }

]

let elemBody = document.body;

function init()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    render();
    resizeHandler();
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
}

function scrollHandler()
{
    scrollY = window.pageYOffset;

    if(scrollY < 0 || scrollY > (totalScrollHeight - windowHeight))
    {
        return;
    }

    if(scrollY > pixelDuration + prevDurations)
    {
        prevDurations += pixelDuration;
        currentScene++;
    }
    else if(scrollY < prevDurations)
    {
        currentScene--;
        prevDurations -= pixelDuration;
    }

    relativeScrollY = scrollY - prevDurations;

    console.log("scene====" + currentScene);
    render(currentScene);
}

function resizeHandler() //애니메이션 프레임 수를 조정한다.
{
    windowwidth = window.innerWidth;
    windowheight = window.innerHeight;

    totalScrollHeight = 0;
    pixelDuration = windowheight * 0.5;

    for(let i = 0; i < animationKeyframes.length; i++)
    {
        totalScrollHeight += pixelDuration;
    }
    totalScrollHeight += windowHeight;

    elemBody.style.height = totalScrollHeight + 'px';
}

let targetElem;

function render(nowState)
{
    targetElem = document.querySelectorAll('.container');
    console.log(targetElem.length);
    console.log(animationKeyframes.length);

    switch(nowState)
    {
        case 0:{
            let opacityVal, moveValA, moveValB, moveValC, moveValD;
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[0].animationVal.opacity);
            moveValA = calcAni(animationKeyframes[0].animationVal.textBox1);
            moveValB = calcAni(animationKeyframes[0].animationVal.imgBox1);
            moveValC = calcAni(animationKeyframes[0].animationVal.imgBox2);
            moveValD = calcAni(animationKeyframes[0].animationVal.textBox2);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveValA + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveValB + 'px)';
            scrollAniElem[2].style.transform = 'translateX(' + moveValC + 'px)';
            scrollAniElem[3].style.transform = 'translateY(' + moveValD + 'px)';
        }break;
        case 1:{
            let opacityVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[1].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 2:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[2].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 3:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[3].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 4:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[4].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 5:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[5].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 6:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[6].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 7:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[7].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 8:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[8].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 9:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[9].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 10:{
            let timeVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[10].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        }break;
        case 11:{//비디오 아웃
            let opacityVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[11].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;

            targetElem[2].querySelector('.sa').style.opacity = 0;
        }break;
        case 12:{
           let opacityVal;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[12].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;

            targetElem[3].querySelector('.sa').style.opacity = 0;
        }break;
        case 13:{
            let opacityVal;
             let scrollAniElem = targetElem[3].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[13].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[4].querySelector('.sa').style.opacity = 0;
         }break;
         case 14:{
            let opacityVal;
             let scrollAniElem = targetElem[4].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[14].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[5].querySelector('.sa').style.opacity = 0;
         }break;
         case 15:{

            let opacityVal;
             let scrollAniElem = targetElem[5].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[15].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[6].querySelector('.sa').style.opacity = 0;
         }break;
         case 16:{
            let opacityVal;
             let scrollAniElem = targetElem[6].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[16].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[7].querySelector('.sa').style.opacity = 0;
         }break;
         case 17:{
            let opacityVal;
             let scrollAniElem = targetElem[7].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[17].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[8].querySelector('.sa').style.opacity = 0;
         }break;
         case 18:{
            let opacityVal;
             let scrollAniElem = targetElem[8].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[18].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[9].querySelector('.sa').style.opacity = 0;
         }break;
         case 19:{
            let opacityVal;
             let scrollAniElem = targetElem[9].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[19].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[10].querySelector('.sa').style.opacity = 0;
         }break;
         case 20:{
            let opacityVal;
             let scrollAniElem = targetElem[10].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[20].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[11].querySelector('.sa').style.opacity = 0;
         }break;
         case 21:{
            let opacityVal;
             let scrollAniElem = targetElem[11].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[21].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

             targetElem[12].querySelector('.sa').style.opacity = 0;
         }break;
         case 22:{
            let opacityVal;
             let scrollAniElem = targetElem[12].querySelectorAll('.sa');
             opacityVal = calcAni(animationKeyframes[22].animationVal.opacity);
             scrollAniElem[0].style.opacity = opacityVal;

         }break;
         case 23:{
            let timeVal;
            let scrollAniElem = targetElem[12].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[23].animationVal.time);
            let myVideo = document.querySelector('#myVideos');
            myVideo.currentTime = timeVal;

         }break;
         case 24:{
            let timeVal;
            let scrollAniElem = targetElem[12].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[24].animationVal.time);

            let myVideo = document.querySelector('#myVideos');
            myVideo.currentTime = timeVal;
            targetElem[12].querySelector('.sa').style.opacity = 1;

        }break;
        case 25:{
            let timeVal;
            let scrollAniElem = targetElem[12].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[25].animationVal.time);

            let myVideo = document.querySelector('#myVideos');
            myVideo.currentTime = timeVal;
            targetElem[12].querySelector('.sa').style.opacity = 1;
            
        }break;

        case 26:{
            let timeVal;
            let scrollAniElem = targetElem[12].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[26].animationVal.time);

            let myVideo = document.querySelector('#myVideos');
            myVideo.currentTime = timeVal;
        }break;

        case 27:{
            let timeVal;
            let scrollAniElem = targetElem[12].querySelectorAll('.sa');
            timeVal = calcAni(animationKeyframes[27].animationVal.time);

            let myVideo = document.querySelector('#myVideos');
            myVideo.currentTime = timeVal;
        }break;
         

    }
    
    
}

function calcAni(value)
{
    return(relativeScrollY / pixelDuration) * (value[1] - value[0]) + value[0];
}

init();