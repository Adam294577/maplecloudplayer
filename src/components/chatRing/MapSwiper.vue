<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide  } from 'swiper/vue';



  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


  // import required modules
    import { Navigation, Pagination } from 'swiper/modules';

    import { onMounted, onUpdated, reactive, ref } from 'vue';
    import { useStore } from 'vuex';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {

        const store = useStore();
        const ImportMapImg = reactive({data:[]})
        const ImportMapFn = () =>{
            for (let i = 1; i <= 11; i++) {
                ImportMapImg.data.push({idx: i,url:require(`@/assets/RingProject/map/map${i}.png`)})
                
            }
        }
        ImportMapFn()
        const swiperSlide = ref(null)
     
        const swiperSlideIdx = ref(1)
        const handSwiperMap = () =>{
            let arr = []
            for (let i = 0; i < swiperSlide.value.length; i++) {
                if(swiperSlide.value[i].$el.classList.contains('swiper-slide-active')){
                    swiperSlideIdx.value = Number(swiperSlide.value[i].$el.dataset.swiperSlideIndex) + 1

                }
            }
           
            arr = ImportMapImg.data.filter(item=>{
                if(item.idx === swiperSlideIdx.value){
                    return item
                }
            })
            store.dispatch('changeMap',arr)            
        }

        const onSlideChange = () => {
          setTimeout(()=>{
            handSwiperMap()
          },100)
        
        };  
    
        const onSwiper = (swiper) => {
        // console.log(swiper.el);
        // swiper-slide-prev
            const testLog = () =>{
                console.log(5207);
            }
        };  



        
        onMounted(() => {
        handSwiperMap()
        let swiperBtnPrev = document.querySelector('.swiper-button-prev')
        let swiperBtnNext = document.querySelector('.swiper-button-next')
        swiperBtnPrev.style['position'] = 'absolute'
        swiperBtnNext.style['position'] = 'absolute'
        // swiperBtnPrev.style['background'] = '#FFF'
        swiperBtnNext.style['display'] = 'block'
        swiperBtnNext.style['width'] = '150px'
        swiperBtnNext.style['height'] = '100%'
        swiperBtnNext.style['paddingLeft'] = '100px'
        swiperBtnNext.style['paddingTop'] = '70px'
        swiperBtnNext.style['top'] = '0%'
        swiperBtnPrev.style['display'] = 'block'
        swiperBtnPrev.style['width'] = '150px'
        swiperBtnPrev.style['height'] = '100%'
        swiperBtnPrev.style['paddingLeft'] = '40px'
        swiperBtnPrev.style['paddingTop'] = '70px'
        swiperBtnPrev.style['top'] = '0%'
     
        const root = document.documentElement;
        root.style.setProperty('--swiper-navigation-size', '27px');        
        root.style.setProperty('--swiper-theme-color', '#EEE');   
        

        swiperBtnPrev.addEventListener("click",handSwiperMap)
        swiperBtnNext.addEventListener("click",handSwiperMap)

      
        
        



        onUpdated(()=>{
            handSwiperMap()
        })

        })
      return {
        modules: [Navigation,Pagination],
        ImportMapImg,
        handSwiperMap,
        swiperSlide,
        onSwiper,
        onSlideChange

      };
    },
  };
</script>
<template>
    <swiper
    
    :loop="true"
    :centeredSlides="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
    // when window width is >= 320px
    600: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 50
    }        
    }"
    
      :navigation="true"

      :modules="modules"
      class="mySwiper"
    >
    <swiper-slide 
    ref="swiperSlide"
      v-for="list in ImportMapImg.data"><img :src="list.url" alt=""></swiper-slide>
     
    </swiper>
    
  </template>



<style lang="scss" scoped>
.swiper {
    user-select: none;
    position: absolute;
    width: 100%;
    height: 150px;
    // top: -250px;
    padding: 10px 50px 20px;
    margin-top: 150px;    
    // border: 1px solid #FF0;
    
    

}
@media (max-width: 992px) { 
  .swiper {
    background-color: #222;
    margin-top: 350px;    
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
}
.swiper-slide-active{
    opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

}





</style>