<template>
  <div class="box" :style="{background: `url(${bg})`}">
    <div class="box-left"></div>
    <div id="china" class="box-center"></div>
    <div style="color:white" class="box-right">
      <table border="1" cellspaceing class="table">
        <thead>
          <tr>
            <td align="center">地区</td>
            <td align="center">新增确诊</td>
            <td align="center">累计确诊</td>
            <td align="center">治愈</td>
            <td align="center">死亡</td>
          </tr>
        </thead>
        <transition-group enter-active-class="animate__animated animate__flipInY" tag="tbody">
          <tr :key="item.name" v-for="item in store.item">
            <td align="center">{{item.name}}</td>
            <td align="center">{{item.today.confirm}}</td>
            <td align="center">{{item.total.confirm}}</td>
            <td align="center">{{item.total.heal}}</td>
            <td align="center">{{item.total.dead}}</td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script lang='ts' setup>
import bg from './image/img-bg.jpg'
import { useStore } from './stores/counter'
import { onMounted } from 'vue'
import * as echarts from 'echarts'   // echart 5的用法
import './assets/china'
import {geoCoordMap} from './assets/geoMap'
import 'animate.css'

const store = useStore()


onMounted( async () =>  {
  await store.getList()
  initCharts()
})

// echarts组件
const initCharts = () => {
  const city = store.list.diseaseh5Shelf.areaTree[0].children
  // console.log(city)
  const data = city.map(v=>{
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.total.nowConfirm),
      children: v.children
    }
  })
  // console.log(data)
  const charts = echarts.init(document.querySelector('#china') as HTMLElement)

  charts.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "120%",
      itemStyle: {
          areaColor: {
            type: "linear-gradient",
            x: 0,
            y: 1200,
            x2: 1000,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#152E6E", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0673AD", // 50% 处的颜色
              },
            ],
            global: true, // 缺省为 false
          },
          shadowColor: "#0f5d9d",
          shadowOffsetX: 0,
          shadowOffsetY: 15,
          opacity: 0.5,
      },
      emphasis: {
          areaColor: "#0f5d9d",
        },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
              opacity: 0,
              label: {
                show: false,
                color: "#009cc9",
            },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        // selectedMode: "multiple",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "120%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          // normal: {
            areaColor: "#0c3653",
            borderColor: "#1cccff",
            borderWidth: 1.8,
          // },
         
        },
        emphasis: {
            areaColor: "#56b1da",
            label: {
              show: false,
              color: "#fff",
            },
          },
        data: data,
      },
      {
          name: 'Top 5',
          type: 'scatter',
          coordinateSystem: 'geo',
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
          // symbolSize: [30,120],
          // symbolOffset:[0, '-40%'] ,
          label: {
            show: true,
            color: "#fff",
            formatter(value:any){
              // console.log(value)
              return value.data.value[2]
            }
          },
          itemStyle: {
            color: '#D8BC37', //标志颜色
          },
          data: data,
      },
    ],
  })
  charts.on('click',(e: any) =>{
    store.item = e.data.children
    console.log(store.item);
  })
}


</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
html,body,#app{
  height: 100%;
}
.box{
  height: 100%;
  display: flex;  
  &-left{
    width: 400px;
    // background-color: antiquewhite;
  }
  &-center{
    flex: 1;
    // width:500px;
    // height:600px
  }
  &-right{
    width: 400px;
    // background-color: antiquewhite;
  }
}
.table{
  width: 100%;
  background-color: #212028;
  tr{
    th{
      padding: 5px;
      white-space: nowrap;
    }
    td{
      padding: 5px 10px;
      width: 100%;
      white-space: nowrap;
    }
  }
}
</style>
