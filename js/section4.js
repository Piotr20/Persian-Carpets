window.addEventListener('scroll', function () {
     const section_4 = document.querySelector('#section4');
     const sectionBonding = section_4.getBoundingClientRect();
     if (
          sectionBonding.top >= 0 &&
          sectionBonding.left >= 0 &&
          sectionBonding.right <= (window.innerWidth || document.documentElement.clientWidth)
     ) {
          let div = document.querySelectorAll(".animation_container div")
          console.log('In viewport');
          for (let i = 0; i <= 10; i++) {
               this.setTimeout(
                    () => {
                         div[i].classList.add("active1");
                    }, i * 300);
               this.setTimeout(() => {
                    div[i].classList.add("active2");
               }, 5500)
               this.setTimeout(() => {
                    div[i].classList.add("active3");
               }, 6500)

          }
          div[0].addEventListener('click', () => {
               div[0].classList.add('active4');
               div[0].classList.remove('active1');

          });
          div[1].addEventListener('click', () => {
               div[1].classList.add('active4');
               div[1].classList.remove('active1');
          });
          div[2].addEventListener('click', () => {
               div[2].classList.add('active4');
               div[2].classList.remove('active1');
          });
          div[3].addEventListener('click', () => {
               div[3].classList.add('active4');
               div[3].classList.remove('active1');
          });
          div[4].addEventListener('click', () => {
               div[4].classList.add('active4');
               div[4].classList.remove('active1');
          });

          let icon = document.querySelectorAll(".animation_container div i");
          icon[0].addEventListener('click', () => {
               div[0].addEventListener('click', () => {
                    div[0].classList.toggle('active4');
                    icon[0].style.fontSize = '0' + 'px';
                    icon[0].style.transitionDelay = "0s";
               });

          });
          div[0].addEventListener('click', () => {
               icon[0].style.fontSize = '100' + 'px';

          });
          icon[1].addEventListener('click', () => {
               div[1].addEventListener('click', () => {
                    div[1].classList.toggle('active4');
                    icon[1].style.fontSize = '0' + 'px';
                    icon[1].style.transitionDelay = "0s";
               });

          });
          div[1].addEventListener('click', () => {
               icon[1].style.fontSize = '100' + 'px';

          });
          icon[2].addEventListener('click', () => {
               div[2].addEventListener('click', () => {
                    div[2].classList.toggle('active4');
                    icon[2].style.fontSize = '0' + 'px';
                    icon[2].style.transitionDelay = "0s";
               });

          });
          div[2].addEventListener('click', () => {
               icon[2].style.fontSize = '100' + 'px';

          });
          icon[3].addEventListener('click', () => {
               div[3].addEventListener('click', () => {
                    div[3].classList.toggle('active4');
                    icon[3].style.fontSize = '0' + 'px';
                    icon[3].style.transitionDelay = "0s";
               });

          });
          div[3].addEventListener('click', () => {
               icon[3].style.fontSize = '100' + 'px';

          });
          icon[4].addEventListener('click', () => {
               div[4].addEventListener('click', () => {
                    div[4].classList.toggle('active4');
                    icon[4].style.fontSize = '0' + 'px';
                    icon[4].style.transitionDelay = "0s";
               });

          });
          div[4].addEventListener('click', () => {
               icon[4].style.fontSize = '100' + 'px';

          });
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});

var carpetDown = document.getElementById('whitedown');

;
(function () {

     var throttle = function (type, name, obj) {
          var obj = obj || window;
          var running = false;
          var func = function () {
               if (running) {
                    return;
               }
               running = true;
               requestAnimationFrame(function () {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
               });
          };
          obj.addEventListener(type, func);
     };

     throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function () {



     carpetDown.style.transform = "translateY(" + window.pageYOffset / 0.3 + "px)";




})
window.addEventListener('scroll', function () {
     const section_3 = document.querySelector('#section3');
     const sectionBonding2 = section_3.getBoundingClientRect();
     var video = document.querySelector('#section3 video');
     if (
          sectionBonding2.top >= 0 &&
          sectionBonding2.left >= 0 &&
          sectionBonding2.right <= (window.innerWidth || document.documentElement.clientWidth)
     ) {
          video.play();

     } else {
          console.log('Not in the viewport... whomp whomp');
          video.pause();
          video.muted();
     }
});
window.addEventListener('scroll', function () {
     const section_1 = document.querySelector('#section1');
     const sectionBonding3 = section_1.getBoundingClientRect();
     var video2 = document.querySelector('#section1 video');
     if (
          sectionBonding3.top >= 0 &&
          sectionBonding3.left >= 0 &&
          sectionBonding3.right <= (window.innerWidth || document.documentElement.clientWidth)
     ) {
          video2.play();


     } else {
          console.log('Not in the viewport... whomp whomp');
          video2.pause();
          video2.muted();
     }
});