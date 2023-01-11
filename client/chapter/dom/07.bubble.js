/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click',function(e){
  console.log(e.target);
  console.log(e.currentTarget);

  console.log('%c visual','background:dodgerblue');

  css('.pop','display','block');
})

getNode('.pop').addEventListener('click',()=>{
  css('.pop','display','none');
})

news.addEventListener('click',function(e){
  console.log(e.target);
  console.log(e.currentTarget);
  console.log('%c news','background:orange');
})

desc.addEventListener('click',function(e){
  console.log(e.target);
  console.log(e.currentTarget);
  console.log('%c desc','background:orange');
})
/* 캡처링 ----------------------------------------------------------------- */

                           
