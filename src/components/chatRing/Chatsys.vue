

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<template>
    <div class="ChatContainer" id="ChatContainer" style="--chatH:4;">
        <div class="baroutline">
            <div class="msgContent">
                <div class="dargbar">
                    <img class="dragImg" src="@/assets/RingProject/drag_bar.jpg" alt="bar">
                    <img class="zoomoutImg" src="@/assets/RingProject/zoom_out_icon.png" alt="縮小">
                </div>
                <div class="txtContent" id="txtscroll">
                    <span class="msg c1"></span>
                </div>
            </div>
            <div class="ChatClass">
                <img class="channelImg" src="@/assets/RingProject/chat_class_c1.png" alt="">
                <ul id="ChatClassList"  class=" class_ch_list" v-show="false" >
                    <li class="item">對好友<span>(/f)</span></li> 
                    <li class="item">對組隊<span>(/p)</span></li> 
                    <li class="item">對公會<span>(/g)</span></li> 
                    <li class="item">對聯盟<span>(/u)</span></li> 
                    <li class="item">對所有人<span>(/e)</span></li> 
                </ul>
                <input id="userinput" type="text" maxlength="20">
                <div class="ChatImg">
                   <img src="@/assets/RingProject/bar_icon_01.png" alt="01" class="Imgitem">
                   <img src="@/assets/RingProject/bar_icon_02.png" alt="02" class="Imgitem">
                   <img src="@/assets/RingProject/bar_icon_03.png" alt="03" class="Imgitem">
                   <img src="@/assets/RingProject/bar_icon_04.png" alt="04" class="Imgitem">
                   <img src="@/assets/RingProject/bar_icon_05.png" alt="05" class="Imgitem">
                   <img src="@/assets/RingProject/bar_icon_06.png" alt="畫面外顯示聊天室窗" class="Imgitem">
          
                  </div>                
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
  .ChatContainer{
    position: absolute;
    top: 100px;
    left: 5px;
    user-select: none;
    z-index: 3;
    margin-top: 0px;
    width: 405px;
    max-width: 405px;
    border: 1px solid #000;
    .baroutline{
        cursor: grab;
        height: 30px;
        display: flex;
        align-items: center;
        background: linear-gradient(180deg, rgba(49,52,53,1) 0%, rgba(69,71,72,1) 100%);
        .msgContent{
          cursor: auto;
          position: absolute;
          width: 405px;
          max-width: 405px;
          top: calc(var(--chatH) * -20px - 20px);
          left: -1px;
          background: #FFF;
          background: #333333d7;
          height: calc(var(--chatH) + 20px);
          &:active{
            cursor: grab;
          }
          .dargbar{
            cursor:grab;
            position: absolute;
            z-index: 2;
            height: 20px;
            width: 405px;
            max-width: 405px;
            background-color: #222222a9;
            top: 0;
            .dragImg{
              position: absolute;
              top: 5px;
              left: 3px;
            }
            .zoomoutImg{
              position: absolute;
              top: 5px;
              right: 5px;
            }
          }
          .txtContent{
            margin-top: 20px;
            padding-left: 3px;
            font-size: 11px;
            // height: $txt_height;
            height: calc( var(--chatH) * 20px );
            // border: 1px solid #F00;
            overflow-y: scroll;
            .msg{
              display: block;
              height: 20px;
              line-height: 20px;
              color: #FFF;
              padding-left: 5px;
              &.c0r{color: #ddb1c2;}
              &.c0y{color: #fbff02;}
              &.c1{color: #FFF;}
              &.c2{}
              &.c3{color: #eb8f05;}
              &.c4{color: #77ffee;}
              &.c5{color: #bd8feb;}

              .symbol{
                display: inline-block;
                position: relative;
                top: -1px;
                padding: 0px 1.5px;
              }

 
            }

          }
          .txtContent::-webkit-scrollbar{
            width: 7px;
            background-color: #797979;
            background-color: transparent;
          }
          .txtContent::-webkit-scrollbar-thumb{
            background-color: rgb(34, 34, 34);
            
          }
          .txtContent::-webkit-scrollbar-track-piece{
            background: transparent;
          }
          
        }
        
        .ChatClass{
            position: relative;
            top: 2px;
            margin-left: 3px;
            display: flex;
            .channelImg{
                position: relative;
                top: -1px;
            }
            .class_ch_list{
                // display: none;
                list-style-type: none;
                user-select: none;
                position: absolute;
                z-index: 2;
                top: -83px;
                width: 75px;
                height: 83px;
                background: #555;
                cursor: pointer;
                .item{
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                    padding-left: 3px;
                    font-size: 10px;
                    color: #FFF;
                    span{
                        display: inline-block;
                        margin-left: 1px;
                        color: #ffff22;
                    }
                }
                .item:hover{
                    font-weight: bold;
                    background: #ffcc00;
                    color: #555;
                    span{
                        color: #ff2222;
                    }
                }
            }
  
        }
        #userinput{
            color: #FFF;
            width: 217px;
            margin-left: 5px;
            padding: 1px;
            padding-left: 5px;
            border-radius: 3px;
            background: #2e2f32;
            border: none;
            border-bottom: 1px solid #222;
            box-shadow: 0px 2px 2px #4a4b50,inset 1px -1px 7px #1e1e20,3px 1px 3px #363638 ;
            font-size: 10px;
            
        }
        #userinput:focus{
            outline: none;
        }
        .ChatImg{
            width: 120px;
            display: flex;
            // border: 1px solid #F00;
            justify-content: space-around;
            margin-left: 3px;
        }
    }

  }
  @media (max-width: 992px) { 
    .ChatContainer{
      position: absolute;
      top: 100px;
      user-select: none;
      z-index: 3;
      margin-top: 0px;
      width: 100%;
      .baroutline{
        width: 100%;
          .msgContent{
            cursor: auto;
            position: absolute;
            &:active{
              cursor: grab;
            }
            .dargbar{
              width: 100%;

            }
            .txtContent{
              margin-top: 20px;
              font-size: 9px;
              .msg{
                display: block;
                height: 20px;
                line-height: 20px;
                color: #FFF;
                padding-left: 5px;
                .symbol{
                  display: inline-block;
                  position: relative;
                  top: -1px;
                  padding: 0px 1.5px;
                }
              }
  
            }
          }
      }
  
    }    
  }
</style>