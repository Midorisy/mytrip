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
          <div class="text">地图/周边</div>
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
    align-items: center;
    height: 66px;

    .rate {
      background-color: #f7f8fc;
      width: 100px;
      height: 66px;
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 8px;
      margin-right: 10px;

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
      display: flex;
      flex: 1;
      background-color: #f7f8fc;
      background-image: url("@/assets/img/home/map_bg.png");
      background-position: 120px 0px;
      background-size: cover;
      background-repeat: no-repeat;
      align-items: center;

      .address {
        height: 50px;
        flex: 1;
        min-width: 0;
        width: 167px;

        .address-title {
          font-size: 14px;
          white-space: nowrap; /* 单行不换行 */
          overflow: hidden; /* 隐藏超出部分 */
          text-overflow: ellipsis; /* 超出显示省略号 */
          margin-bottom: 5px; /* 替代原来的margin-top，更合理 */

        }

        .description {
          line-height: 1.5;
          font-size: 10px;
          color: #999;
        }
      }

      .map {
        color: #8da5cd;
        display: flex;
        flex: none;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        width: 50px;

        .icon {
          position: relative;
          background-color: #8da5cd;
          border-radius: 50%;
          width: 25px;
          height: 25px;

          &::before {
            position: absolute;
            content: "";
            width: 25px;
            height: 25px;
            top: 3px;
            left: 3px;
            background-image: url("@/assets/img/home/location.png");
            background-repeat: no-repeat;
            background-size: 20px;
          }
        }

        .text {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
