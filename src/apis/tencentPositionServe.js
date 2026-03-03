import { instance } from "@/servers/request"
const key = 'N22BZ-3S5EW-3QSRA-YYKUZ-MLLYF-FXBSX'
/**
 * 根据经纬度，返回腾讯地图提供的位置
 *  positionCoords: 39.992870(纬度),116.310250(经度)
 * @param {String} positionCoords  当前经纬度位置对象
 */
export function tencentPositionServe(positionCoords) {
   return instance.get('/tencentmapapi/ws/geocoder/v1',{
    params:{
            key,
            location:positionCoords
        }
   })
}

        