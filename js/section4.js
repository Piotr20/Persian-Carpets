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
                    }, i * 400);
               this.setTimeout(() => {
                    div[i].classList.add("active2");
               }, 5500)
               this.setTimeout(() => {
                    div[i].classList.add("active3");
               }, 6500)

          }
          div[0].addEventListener('click', () => {
               div[0].classList.toggle('active4');
               div[0].classList.remove('active1');

          });
          div[1].addEventListener('click', () => {
               div[1].classList.toggle('active4');
               div[1].classList.remove('active1');
          });
          div[2].addEventListener('click', () => {
               div[2].classList.toggle('active4');
               div[2].classList.remove('active1');
          });
          div[3].addEventListener('click', () => {
               div[3].classList.toggle('active4');
               div[3].classList.remove('active1');
          });
          div[4].addEventListener('click', () => {
               div[4].classList.toggle('active4');
               div[4].classList.remove('active1');
          });
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});