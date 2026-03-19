<template>
  <div class="house-description">
    <div class="title">近春熙路/宽窄熊猫基地网红高空城景房</div>
    <div class="tags">
      <div class="tag">现代风</div>
      <div class="tag">实拍看房</div>
      <div class="tag">免费瓶装水</div>
      <div class="tag">现代风</div>
      <div class="tag">实拍看房</div>
    </div>
    <div class="rate-location">
      <div class="rate">
        <div class="score-count">
          <div class="score"><span class="big">4.9</span>分</div>
          <div class="count">3526条</div>
        </div>
      </div>
      <div class="location">
        <div class="address">
          <div class="address-title">
            成华区, 成都成华区永立龙寓(永立星城都)
          </div>
          <div class="description">
            距春熙路地铁站驾车约6.3公里，约15分钟可达
          </div>
        </div>
        <div class="map">
          <div class="icon"></div>
          <div class="text">
            地图/周边
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.house-description {
  box-sizing: border-box;
  width: 100%;
  height: 154px;
  padding: 12px 16px;
  background-color: #fff;
  .title {
    font-weight: 600;
    font-size: 16px;
  }
  .tags {
    margin-top: 10px;
    display: flex;
    font-size: 10px;
    .tag {
      box-sizing: border-box;
      height: 15px;
      line-height: 15px;
      color: rgb(118, 61, 16);
      border: 1px solid rgb(118, 61, 16);
      border-radius: 3px;
      padding: 0 5px;
      margin: 0 2px;
    }
  }
  .rate-location {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66px;

    .rate {
      background-color: #F7F8FC;
      width: 100px;
      height: 66px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 8px;
      .score-count {
        height: 18px;
        display: flex;
        align-items: baseline;
        .score {
          font-size: 12px;
          margin-right: 5px;
          .big {
            font-size: 18px;
          }
        }
        .count {
          font-size: 10px;
          color: #999;
        }
      }
    }
    .location {
      height: 66px;
      width: 236px;
      display: flex;
      background-color: #F7F8FC;
      background-image: url('@/assets/img/home/map_bg.png');
      background-position: 120px,0px;
      background-size: contain;
      background-repeat: no-repeat;

      justify-content: space-around;
      align-items: center;

      .address {
        width: 162px;
        height: 50px;
        /* background-color: pink; */
        .address-title{
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

        }
        .description{
            margin-top: 5px;
            line-height: 1.5;
            font-size: 10px;
            color: #999;
        }
      }
      .map {
        
        color: #8DA5CD;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        .icon {
          position: relative;
          background-color: #8DA5CD;


          border-radius: 50%;
         
          width: 25px;
          height: 25px;

          &::before{
            position: absolute;
            content: "";
            width: 25px;
            height: 25px;
            top: 3px;
            left: 3px;
          background-image: url('@/assets/img/home/location.png');
          background-repeat: no-repeat;
          background-size: 20px;
          }
        }
        .text{
          font-size: 12px;
        }
      }
    }
  }
}
</style>
