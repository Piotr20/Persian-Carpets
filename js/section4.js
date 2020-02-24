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

     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});