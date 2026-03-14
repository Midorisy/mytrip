<template>
    <div class="on-record">
        <div class="footer">
            <ul>
                <li>关于黑马民宿</li>
                <li>客服热线</li>
                <li>电脑版</li>
                <li>企业营业执照</li>
                <li>隐私权政策</li>
                <li>黑马民宿保障计划</li>
            </ul>
        </div>
        <p class="icp">
            <span>©2026 途家网 津ICP备17006480号</span>
            <span class="safe">京公网安备11010802031847号</span>
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.on-record{
    width: 100%;
    height: 98px;
    background-color: rgb(51, 51, 51);
    color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .footer{
        width: 100%;
        padding: 20px;
        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            
            li{
                box-sizing: border-box;
                text-align: center;
                font-size: 12px;
                border-right: 2px solid #fff;
                &:nth-child(3n){
                    border-right: none;
                }
            }
        }
    }
    .icp{
        position: absolute;
        bottom: -10px;
        text-align: center;

        span{
            font-size: 11px;
            color: #999;
        }
        .safe{
            margin-left: 20px;
        }
    }
}
</style>