<script setup>
import { onMounted } from "vue";
import Chart from 'chart.js/auto';


onMounted(() => {
    const myChart = document.getElementById('myChart')
    new Chart(myChart, {
    type: 'bar',
    data: {
      labels: ['Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16'],
      datasets: [{
        label: '# of New',
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: [
            'rgba(19, 19, 19, 1)', //black
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
        ],
        borderColor: [
            'rgba(19, 19, 19, 1)', //black
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
            'rgba(19, 19, 19, 1)',
        ],
        borderWidth: 1
      },{
        label: '# of Returns',
        data: [4, 19, 3, 5, 2, 3, 7],
        backgroundColor: [
            'rgba(230, 126, 34, 1)', //yellow
            'rgba(230, 126, 34, 1)',
            'rgba(230, 126, 34, 1)',
            'rgba(230, 126, 34, 1))',
            'rgba(230, 126, 34, 1)',
            'rgba(230, 126, 34, 1)',
            'rgba(230, 126, 34, 1)',
        ],
        borderColor: [
            'rgba(230, 126, 34, 1)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(153, 102, 255)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  myChart
}) 

</script>

<template>
    <div class="card p-2">
        <div class="top1 d-flex justify-content-between align-items-center">
            <div class="visitors"><h5 class="subtitle">Visitors</h5></div>
            <div class="ellipsis"><span>...</span></div>
        </div>
        <hr>
        <div class="top">
            <div class="user-count"><h5 class="subtitle"><span class="text">New/Returning: &nbsp; &nbsp; </span>34,344 / 10,111</h5></div>
            <div class="this-week">
                <div class="new-return">
                    <div class="new">
                        <div class="indicator"></div>
                        <span>New</span>
                    </div>

                    <div class="return">
                        <div class="indicator"></div>
                        <span>Returning</span>
                    </div>
                </div>
                
                <h5 class="text m-0">This week</h5>
                <span class="material-icons-round">expand_more</span>
            </div>
        </div>
        
        <div class="chart-secton">
            <canvas id="myChart" width="400" height="205"></canvas>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
%lightNormal {
    font-family: var(--montserrat-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #131313;
}
%text {
    font-family: var(--brand-font-family);
    font-weight: 400 !important;
    font-size: 14px !important;
    color: rgba(0,0,0,0.7);
}
.card{
    background-color: #fafafa;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user-count{
            .text{
                @extend %text;
            }
        }
        .this-week{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            .text{
                @extend %text
            }
            span{
                font-size: 14px;
            }

            .new-return{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                .new{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 5px;
                    .indicator{
                        width: 16px;
                        height: 16px;
                        background: #131313;
                        border-radius: 5px;
                    }
                }
                .return{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 5px;
                    .indicator{
                        width: 16px;
                        height: 16px;
                        background: #E67E22;
                        border-radius: 5px;
                    }
                }
                
            }
        }
    }
}
</style>
