var data =[
['语言名称','排名','升或降','变化幅度'],
  ['Java','1','降','-0.01%'],
  ['C','2','升','+2.44%'],
  ['Python','3','升','+1.41%'],
  ['C++','4','降','-2.58%'],
  ['C#','5','升','+2.07%'],
  ['Visual Basic.NET','6','降','-1.17%'],
  ['JavaScript','7','降','-0.85%']
];
var container = document.getElementById('first');
var hot = new Handsontable(container,{
  data:data,
    rowHeaders:true,
    colHeaders:true,
    filters:true,
    dropdownMenu:true
});
var myChart = echarts.init(document.getElementById('main'));
  
  let xData=[],
      yData=[];

  for(let i=0; i<=1; i+=0.1){
    xData.push(i);
    yData.push(h(i));
  }
  function h(p){
    return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
  }
          // 指定图表的配置项和数据
var option = {
            title: {
                text: 'JavaScript语言排名变化'
            },

            tooltip: {},
            legend: {
                data:['H(x)']
            },

            xAxis: {//p
                data: ['2000','2005','2010','2015','2020']
            },
            yAxis: {
              type:'value'
            },
            series: [{
              name:'排名',
                type: 'line',
                
                data: [6,9,8,8,7]
            }]
        };

// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

