/**
 * Created by try on 2016.8.1.
 */
$(function(){
    $(".tab").click(function(){
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });
    //初始化只显示第一个tab
    $(".rightframe").css("display","none");
    $("#rightframe1").css("display","block");

    //获取重点项目
    $.ajax({
        url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetImportProject ",
        success:function(data){
            data=eval("(" + data + ")");
            var project=data.data;
            var projectLength=project.length;
            projecttype1=[];
            projecttype2=[];
            for(var i=projectLength-1;i>=0;i--){
                if(project[i].projecttype=="1"){
                    projecttype1.push(project[i])
                }
                else {
                    projecttype2.push(project[i]);
                }
            }
            var chart1_1=function () {
                var chart1=echarts.init(document.getElementById("chart1"));
                var option = {
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['在建项目','计划新开项目']
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            data :(function(){
                                var datatemp=[]
                                for(var i=0;i<6;i++){
                                    if(projecttype1[i].projectnum){
                                        datatemp.push(projecttype1[i].ymonth);
                                    }
                                }
                                return datatemp;
                            })()
                        }
                    ],
                    yAxis : [
                        {
                            name:"单位:个",
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'在建项目',
                            type:'bar',
                            data:(function(){
                                var datatemp=[];
                                for(var i=0;i<6;i++){
                                    if(projecttype1[i].projectnum) {
                                        datatemp.push(projecttype1[i].projectnum);
                                    }
                                }
                                return datatemp;
                            })(),
                        },
                        {
                            name:'计划新开项目',
                            type:'bar',
                            data:(function(){
                                var datatemp=[]
                                for(var i=0;i<6;i++){
                                    if(projecttype1[i].projectnum) {
                                        datatemp.push(projecttype2[i].projectnum);
                                    }
                                }
                                return datatemp;
                            })(),
                        }
                    ]
                };
                chart1.setOption(option);
            };
            var chart1_2=function () {
                var chart1=echarts.init(document.getElementById("chart1"));
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['在建项目','计划新开项目']
                    },
                    //toolbox: {
                    //    show: true,
                    //    feature: {
                    //        dataZoom: {
                    //            yAxisIndex: 'none'
                    //        },
                    //        dataView: {readOnly: false},
                    //        magicType: {type: ['line', 'bar']},
                    //        restore: {},
                    //        saveAsImage: {}
                    //    }
                    //},
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: (function(){
                            var datatemp=[]
                            for(var i=0;i<6;i++){
                                if(projecttype1[i].projectmoney){
                                    datatemp.push(projecttype1[i].ymonth);
                                }
                            }
                            return datatemp;
                        })()
                    },
                    yAxis: {
                        type: 'value',
                        name:"单位:万元",
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    series: [
                        {
                            name:'在建项目',
                            type:'line',
                            data:(function(){
                                var datatemp=[]
                                for(var i=0;i<6;i++){
                                    if(projecttype1[i].projectmoney) {
                                        datatemp.push(projecttype1[i].projectmoney);
                                    }
                                }
                                return datatemp;
                            })()
                        },
                        {
                            name:'计划新开项目',
                            type:'line',
                            data:(function(){
                                var datatemp=[]
                                for(var i=0;i<6;i++){
                                    if(projecttype1[i].projectmoney) {
                                        datatemp.push(projecttype2[i].projectmoney);
                                    }
                                }
                                return datatemp;
                            })()
                        }
                    ]
                };

                chart1.setOption(option);
            };
            //var chart1_3=function () {
            //    var chart1=echarts.init(document.getElementById("chart1"));
            //    var option = {
            //        tooltip : {
            //            trigger: 'axis'
            //        },
            //        legend: {
            //            data:['在建项目','计划新开项目']
            //        },
            //        //toolbox: {
            //        //    show: true,
            //        //    feature: {
            //        //        dataZoom: {
            //        //            yAxisIndex: 'none'
            //        //        },
            //        //        dataView: {readOnly: false},
            //        //        magicType: {type: ['line', 'bar']},
            //        //        restore: {},
            //        //        saveAsImage: {}
            //        //    }
            //        //},
            //        calculable : true,
            //        xAxis : [
            //            {
            //                type : 'category',
            //                data :(function(){
            //                    var datatemp=[]
            //                    for(var i=0;i<6;i++){
            //                        if(projecttype1[i].projectnum){
            //                            datatemp.push(projecttype1[i].ymonth);
            //                        }
            //                    }
            //                    return datatemp;
            //                })()
            //            }
            //        ],
            //        yAxis : [
            //            {
            //                name:"单位:个",
            //                type : 'value'
            //            }
            //        ],
            //        series : [
            //            {
            //                name:'在建项目',
            //                type:'bar',
            //                data:(function(){
            //                    var datatemp=[];
            //                    for(var i=0;i<6;i++){
            //                        datatemp.push(projecttype1[i].projectnum);
            //                    }
            //                    return datatemp;
            //                })(),
            //            },
            //            {
            //                name:'计划新开项目',
            //                type:'bar',
            //                data:(function(){
            //                    var datatemp=[]
            //                    for(var i=0;i<6;i++){
            //                        datatemp.push(projecttype2[i].projectnum);
            //                    }
            //                    return datatemp;
            //                })(),
            //            }
            //        ]
            //    };
            //    chart1.setOption(option);
            //};
            var chart1_4=function () {
                var chart1=echarts.init(document.getElementById("chart1"));
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['在建项目','计划新开项目']
                    },
                    grid: {
                        left: '3%',
                        right: '13%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        name:"单位:万元",
                        nameLocation:'end',
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: (function(){
                            var datatemp=[]
                            for(var i=0;i<6;i++){
                                if(projecttype1[i].actualinvestment){
                                    datatemp.push(projecttype1[i].ymonth);
                                }
                            }
                            return datatemp;
                        })()
                    },
                    series: [
                        {
                            label:{
                                normal:{
                                    show: true,
                                    position: 'right'}
                            },
                            name: '在建项目',
                            type: 'bar',
                            data: (function(){
                                var datatemp=[]
                                for(var i=0;i<6;i++){
                                    if(projecttype1[i].actualinvestment) {
                                        datatemp.push(projecttype1[i].actualinvestment);
                                    }
                                }
                                return datatemp;
                            })()
                        },
                        {
                            label:{
                                normal:{
                                    show: true,
                                    position: 'right'}
                            },
                            name: '计划新开项目',
                            type: 'bar',
                            data: (function(){
                                var datatemp=[]
                                for(var i=0;i<6;i++){
                                    if(projecttype1[i].actualinvestment) {
                                        datatemp.push(projecttype2[i].actualinvestment);
                                    }
                                }
                                return datatemp;
                            })()
                        }
                    ]
                };
                chart1.setOption(option);
            };
            chart1tab=function (type,e) {
                $(".tab1 ul li a").removeClass("chart-tab-select");
                if($(e).context.className==""){
                    $(e).addClass("chart-tab-select");
                }
                else {
                    $(e).removeClass("chart-tab-select");
                }
                switch (type){
                    case 1:
                        chart1_1();
                        break;
                    case 2:
                        chart1_2();
                        break;
                    case 3:
                        chart1_3();
                        break;
                    case 4:
                        chart1_4();
                        break;
                }
            };
            chart1_1();
        }
    });

    //获取三公经费
    $.ajax({
        url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetThreePub",
        success:function(data){
            data=eval("(" + data + ")");
            var threePub=data.data;
            var chart2=echarts.init(document.getElementById("chart2"));
            var option = {
                tooltip: {
                    trigger: 'item',
                    backgroundColor : 'rgba(0,0,250,0.2)'
                },
                legend: {
                    orient:'vertical',
                    right:'5',
                    top:'10',
                    data: (function(){
                        var datatemp=[];
                        for(var i=0;i<threePub.length;i++){
                            datatemp.push(threePub[i].ymonth);
                        }
                        return datatemp;
                    })()
                },
                visualMap: {
                    color: ['red', 'yellow']
                },
                radar: {
                    indicator : [
                        { text: '因公出国', max: 1},
                        { text: '公务接待费', max: 1},
                        { text: '公车维护费', max: 10},
                        { text: '公车购置费', max: 1},
                        { text: '会议费', max: 0.5}
                    ]
                },
                series : (function (){
                    var series = [];
                    for (var i = 1; i <threePub.length; i++) {
                        series.push({
                            name:'三公经费支出',
                            type: 'radar',
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        width:1
                                    }
                                },
                                emphasis : {
                                    areaStyle: {color:'rgba(0,250,0,0.7)'}
                                }
                            },
                            data:[
                                {
                                    value:[
                                        threePub[i].abroadcost,
                                        threePub[i].receptioncost,
                                        threePub[i].carmaintenancecost,
                                        threePub[i].carpurchasecost,
                                        threePub[i].meetingcost
                                    ],
                                    name: threePub[i].ymonth
                                }
                            ]
                        });
                    }
                    return series;
                })()
            };
            chart2.setOption(option);
        }
    });

    //获取经济指标
    $.ajax({
        url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetEconomicInfo ",
        success:function(data){
            data=eval("(" + data + ")");
            var economi=data.data;
            var chart3=echarts.init(document.getElementById("chart3"));
            var option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    top:'10',
                    data:['工业总产值', '一般公共预算总收入','固定资产投资','社会消费品零售','内资到资','实际利用外资']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top:'26%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data :(function(){
                            var datatemp=[];
                            for(var i=0;i<economi.length;i++){
                                datatemp.push(economi[i].ymonth);
                            }
                            return datatemp;
                        })()
                    }
                ],
                yAxis : [
                    {
                        name:'单位:万元',
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'一般公共预算总收入',
                        type:'bar',
                        barWidth : 20,
                        stack: '工业总产值',
                        data:(function(){
                            var datatemp=[];
                            for(var i=0;i<economi.length;i++){
                                datatemp.push(economi[i].generalpublictotalbudget);
                            }
                            return datatemp;
                        })()
                    },
                    {
                        name:'固定资产投资',
                        type:'bar',
                        barWidth : 20,
                        stack: '工业总产值',
                        data:(function(){
                            var datatemp=[];
                            for(var i=0;i<economi.length;i++){
                                datatemp.push(economi[i].fixedassetsinvest);
                            }
                            return datatemp;
                        })()
                    },
                    {
                        name:'社会消费品零售',
                        type:'bar',
                        barWidth : 20,
                        stack: '工业总产值',
                        data:(function(){
                            var datatemp=[];
                            for(var i=0;i<economi.length;i++){
                                datatemp.push(economi[i].socialconsumersale);
                            }
                            return datatemp;
                        })()
                    },
                    {
                        name:'内资到资',
                        type:'bar',
                        barWidth : 20,
                        stack: '工业总产值',
                        data:(function(){
                            var datatemp=[];
                            for(var i=0;i<economi.length;i++){
                                datatemp.push(economi[i].domesticinvest);
                            }
                            return datatemp;
                        })()
                    },
                    {
                        name:'实际利用外资',
                        type:'bar',
                        barWidth : 20,
                        stack: '工业总产值',
                        data:(function(){
                            var datatemp=[]
                            for(var i=0;i<economi.length;i++){
                                datatemp.push(economi[i].foreigninvest);
                            }
                            return datatemp;
                        })()
                    },
                    {
                        name:'工业总产值',
                        type:'bar',
                        barWidth : 20,
                        data:(function(){
                            var datatemp=[];
                            for(var i=0;i<economi.length;i++){
                                datatemp.push(economi[i].totalindustrialoutput);
                            }
                            return datatemp;
                        })()
                    }
                ]
            };

            chart3.setOption(option);
        }
    });
    
    //医疗机构
    $.ajax({
        url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetHospital",
        success:function(data){
            data=eval("(" + data + ")");
            var hospital=data.data;
            var hospitalLength=hospital.length;
            var map=new BMap.Map("chart4");
            //初始化地图
            map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, offset: new BMap.Size(0, 23),type: BMAP_NAVIGATION_CONTROL_LARGE}));
            map.centerAndZoom(new BMap.Point(119.137875,26.156234), 10);map.setCurrentCity("闽侯县");
            map.enableScrollWheelZoom(true);
            //画行政区
            var bdary = new BMap.Boundary();
            bdary.get("闽侯县", function(rs){       //获取行政区域
                map.clearOverlays();        //清除地图覆盖物       
                var count = rs.boundaries.length; //行政区域的点有多少个
                if (count === 0) {
                    alert('未能获取当前输入行政区域');
                    return ;
                }
                for(var i = 0; i < count; i++){
                    var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeStyle:"dashed",strokeColor:'#008EEB', strokeOpacity:0.8, fillColor: "#F4F0D2"}); //建立多边形覆盖物
                    map.addOverlay(ply); //添加覆盖物
                }
            });
            //添加标注
            var myGeo = new BMap.Geocoder();
            var j=0;
            var tempindex=0;
            var marker = new Array(); //存放标注点对象的数组 
            var info = new Array(); //存放提示信息窗口对象的数组
            var searchInfoWindow = new Array();
            function bdGEO4(){
                if(tempindex <hospitalLength){
                    var add = hospital[tempindex].institutionaddress;
                    geocodeSearch(add);
                }
                tempindex++;
            }
            function geocodeSearch(add){
                if(tempindex < hospitalLength){
                    setTimeout(bdGEO4,300);
                }
                myGeo.getPoint(add, function(point){
                    if (point) {
                        //marker4[j] = new BMap.Marker(new BMap.Point(temp4[j].lon,temp4[j].lat));  // 创建标注
                        marker[j] = new BMap.Marker(new BMap.Point(point.lng,point.lat));  // 创建标注
                        info[j] ="<span style='margin-bottom: 8px'>所属："+hospital[j].leader+"</span><br><span class='countylistpr2'>地址："+hospital[j].institutionaddress+"</span>"; // 创建信息窗口对象
                        searchInfoWindow[j] = new BMapLib.SearchInfoWindow(map, info[j], {
                            title  : "<span id='companydetail'>"+hospital[j].institutionname+"</span>",      //标题
                            panel  : "panel",         //检索结果面板
                            enableAutoPan : true,     //自动平移
                            searchTypes   :[]
                        });
                        map.addOverlay(marker[j]);               // 将标注添加到地图中
                        marker[j].addEventListener("click",
                            (function(k){
                                // js 闭包
                                return function(){
                                    searchInfoWindow[k].open(marker[k]);
                                }
                            })(j)
                        );
                    }
                    j++
                }, "闽侯县");
            }
            bdGEO4();
        }
    });
    
    //警务信息
    $.ajax({
        url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetPolice",
        success:function(data){
            data=eval("(" + data + ")");
            var police=data.data;
            var policeLength=police.length;
            for (var i=0;i<policeLength;i++){
                if(i%2==0){
                    $("#cd-timeline").append(' ' +
                        '<div class="cd-timeline-block">'+
                        '<div class="cd-timeline-img cd-picture">'+
                        '<div class="circle"></div>'+
                        '</div>'+
                        '<div class="cd-timeline-content content-left animated slideInLeft">'+
                        '<p>'+police[i].affair+'</p>'+
                        '<span class="cd-date date-left animated slideInRight">'+police[i].time+'</span>'+
                        '</div>'+
                        '</div>');
                }
                else {
                    $("#cd-timeline").append(' ' +
                        '<div class="cd-timeline-block">'+
                        '<div class="cd-timeline-img cd-movie">'+
                        '<div class="circle"></div>'+
                        '</div>'+
                        '<div class="cd-timeline-content content-right animated slideInRight"><em></em>'+
                        '<p>'+police[i].affair+'</p>'+
                        '<span class="cd-date date-right animated slideInLeft">'+police[i].time+'</span>'+
                        '</div>'+
                        '</div>'); 
                }
            }
            $(".cd-timeline-block:last").css({"margin-bottom":"-50px","background":"#fff"});
        }
    });

    //社保信息
    var area=["南屿镇", "小箬乡", "竹岐乡", "洋里乡", "青口镇", "尚干镇", "南通镇", "甘蔗街道", "上街镇", "白沙镇", "江洋农场", "祥谦镇", "廷坪乡", "荆溪镇", "大湖乡", "鸿尾乡","甘蔗镇"];
    var month=[201603,201604,201605,201606];
    var chart6=function(type,tempdata,sbtype){
        if(type==1){
            $.ajax({
                url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetSbByArea?month="+tempdata,
                success:function(data){
                    data=eval("(" + data + ")");
                    var sbbyarea=data.data;
                    var sbbyareaLength=sbbyarea.length;
                    var chart6=echarts.init(document.getElementById("chart6"));
                    var option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            x: 'left',
                            left:40,
                            top:20,
                            data:(function(){
                                var datatemp=[];
                                for(var i=0;i<sbbyareaLength;i++){
                                    datatemp.push(sbbyarea[i].townname);
                                }
                                return datatemp;
                            })()
                        },
                        series: [
                            {
                                name:'社保信息',
                                type:'pie',
                                radius: ['40%', '55%'],
                                center:['65%','45%'],
                                data:(function(){
                                    var datatemp=[];
                                    for(var i=0;i<sbbyareaLength;i++){
                                        var arr={"name":sbbyarea[i].townname,"value":sbbyarea[i][sbtype]};
                                        datatemp.push(arr);
                                    }
                                    return datatemp;
                                })()
                            }
                        ]
                    };

                    chart6.setOption(option);
                }
            });
        }
        else {
            $.ajax({
                url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetSbByMonth",
                data:{"area":""},
                type:'POST',
                success:function(data){
                    data=eval("(" + data + ")");
                    var sbbymonth=data.data;
                    var sbbymonthLength=sbbymonth.length;
                    console.log(sbbymonth);
                    var series=[];
                    for(var i=0;i<area.length;i++){
                        series.push({
                            name:area[i],
                            type:'line',
                            smooth:true,
                            data:(function(){
                                var temp=[];
                                for(var j=0;j<sbbymonthLength;j++){
                                    if(area[i]==sbbymonth[j].townname)
                                        temp.push(sbbymonth[j][sbtype]);
                                }
                                return temp;
                            })()
                        })
                    }
                    var chart6=echarts.init(document.getElementById("chart6"));
                    var option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:area,
                            top:0
                        },
                        grid:{
                            top:80, 
                            left:80,
                            bottom:50  
                        },
                        xAxis:  {
                            type: 'category',
                            boundaryGap: false,
                            data:month
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value}'
                            }
                        },
                        series: series
                    };
                    chart6.setOption(option);
                }
            });
        }

    };
    //初始页面
    var type=1;//设定默认为按区域
    var temp=201603;//设定默认月份
    var sbtype="paidnum";//设定默认选择类型
    chart6(type,temp,sbtype);
    for(var i=0;i<month.length;i++){
        $("#getsb").append('<option value='+month[i]+'>'+month[i]+'</option>');
    }
    //tab6切换
    $($(".tab6 ul li a")[0]).click(function(){
        $("#getsb").empty();
        type=1;
        var temp=201603;
        var sbtype=$("#sbtype").val();
        chart6(type,temp,sbtype);
        $($(".tab6 ul li a")[0]).addClass("chart-tab-select");
        $($(".tab6 ul li a")[1]).removeClass("chart-tab-select");
        $("#getsb").show();
        for(var i=0;i<month.length;i++){
            $("#getsb").append('<option value='+month[i]+'>'+month[i]+'</option>');
        }
    });
    $($(".tab6 ul li a")[1]).click(function(){
        $("#getsb").empty();
        type=2;
        var temp="南屿镇";
        var sbtype=$("#sbtype").val();
        chart6(type,temp,sbtype);
        $($(".tab6 ul li a")[1]).addClass("chart-tab-select");
        $($(".tab6 ul li a")[0]).removeClass("chart-tab-select");
        $("#getsb").hide();
        //for(var i=0;i<area.length;i++){
        //    $("#getsb").append('<option value='+area[i]+'>'+area[i]+'</option>');
        //}
    });
    $("#sbtype,#getsb").change(function(){
        var temp=$("#getsb").val();
        var sbtype=$("#sbtype").val();
        console.log(temp);
        chart6(type,temp,sbtype);
    });
});


var selecttab=function(num){
    switch (num){
        case 1:
            $(".rightframe").css("display","none");
            $("#rightframe1").css("display","block");
            break;
        case 2:
            $(".rightframe").css("display","none");
            $("#rightframe2").css("display","block");
            rightframe2();
            break
        case 3:
            $(".rightframe").css("display","none");
            $("#rightframe3").css("display","block");
            rightframe3();
            break
    }
};

//产业布局
var chart7tab=function(){
    $.ajax({
        url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetNewGsByTownCategory",
        success:function(data){
            data=eval("(" + data + ")");
        }
    });
};

//企业分析图
var chart8tab=function(type,e){
    if(e){
        $(".tab8 ul li a").removeClass("chart-tab-select");
        if($(e).context.className==""){
            $(e).addClass("chart-tab-select");
        }
        else {
            $(e).removeClass("chart-tab-select");
        }
    }
    else {
        $($(".tab8 ul li a")[0]).addClass("chart-tab-select")
        $($(".tab8 ul li a")[1]).removeClass("chart-tab-select")
    }
    if(type==1){
        $.ajax({
            url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetNewGsBytown",
            success:function(data){
                data=eval("(" + data + ")");
                var qysl=data.data;
                var qyslLength=qysl.length;
                $("#chart8").empty();
                var chart8=echarts.init(document.getElementById("chart8"));
                option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        left:20,
                        top:20,
                        data:(function(){
                            var temp=[];
                            for(var i=0;i<qyslLength;i++){
                                temp.push(qysl[i].town)
                            }
                            return temp;
                        })()
                    },
                    calculable : true,
                    series : [
                        {
                            name:'企业分布',
                            type:'pie',
                            center : ['60%', '50%'],
                            data:(function(){
                                var temp=[];
                                for(var i=0;i<qyslLength;i++){
                                    var temp2={"value":qysl[i].ct,"name":qysl[i].town};
                                    temp.push(temp2)
                                }
                                return temp;
                            })()
                        }
                    ]
                };
                chart8.setOption(option)
            }
        });
    }
    if(type==2){
        $.ajax({
            url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetNewGsByCategory",
            success:function(data){
                data=eval("(" + data + ")");
                var hysl=data.data;
                var hyslLength=hysl.length;
                $("#chart8").empty();
                console.log(hysl);
                var chart8=echarts.init(document.getElementById("chart8"));
                option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c}个"
                    },
                    calculable : true,
                    series: [
                        {
                            name:'行业数量',
                            type:'treemap',
                            visibleMin: 300,
                            width:'90%',
                            height:'80%',
                            label: {
                                show: true,
                                formatter: '{b}'
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff'
                                }
                            },
                            data: (function(){
                                var temp=[];
                                for(var i=0;i<hyslLength;i++){
                                    var temp2={"value":hysl[i].ct,"name":hysl[i].category};
                                    temp.push(temp2)
                                }
                                return temp;
                            })()
                        }
                    ]
                };
                chart8.setOption(option)
            }
        });
    }

};

//工商数据注册信息
var chart9tab=function(){
    $.ajax({
        url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetGongShangRegiest",
        success:function(data){
            data=eval("(" + data + ")");
            var regiest=data.data;
            var regiestLength=regiest.length;
            var chart9=echarts.init(document.getElementById("chart9"));
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                //toolbox: {
                //    feature: {
                //        dataView: {show: true, readOnly: false},
                //        magicType: {show: true, type: ['line', 'bar']},
                //        restore: {show: true},
                //        saveAsImage: {show: true}
                //    }
                //},
                legend: {
                    top:'10',
                    data:['注册数量','注册资金']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '13%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: (function(){
                            var datatemp=[]
                            for(var i=0;i<regiestLength;i++){
                                datatemp.push(regiest[i].createdate);
                            }
                            return datatemp;
                        })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '数量:个',
                        min: 0,
                        max: 240,
                        interval: 40,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '资金:万元',
                        min: 0,
                        max: 120000,
                        interval: 20000,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        name:'注册数量',
                        type:'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        data:(function(){
                            var datatemp=[]
                            for(var i=0;i<regiestLength;i++){
                                datatemp.push(regiest[i].ct);
                            }
                            return datatemp;
                        })()
                    },
                    {
                        name:'注册资金',
                        type:'line',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        yAxisIndex: 1,
                        data:(function(){
                            var datatemp=[]
                            for(var i=0;i<regiestLength;i++){
                                datatemp.push(regiest[i].capital);
                            }
                            return datatemp;
                        })()
                    }
                ]
            };
            chart9.setOption(option);
        }
    });

};

//重点行业分析
var chart10tab=function(type,e){
    if(e){
        $(".tab10 ul li a").removeClass("chart-tab-select");
        if($(e).context.className==""){
            $(e).addClass("chart-tab-select");
        }
        else {
            $(e).removeClass("chart-tab-select");
        } 
    }
    else {
        $($(".tab10 ul li a")[0]).addClass("chart-tab-select")
        $($(".tab10 ul li a")[1]).removeClass("chart-tab-select")
    }
    $.ajax({
        url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetGongShangClass ",
        success:function(data){
            data=eval("(" + data + ")");
            var gongshang=data.data;
            var gongshangLength=gongshang.length;
            var data1=[];
            var data2=[];
            var data3=[];
            var data4=[];
            var data5=[];
            var data6=[];
            var createdate=["2016-01","2016-02","2016-03","2016-04","2016-05","2016-06"];
            var showtype=[];
            //按日期数据归类
            for(var i=0;i<gongshangLength;i++){
                switch (gongshang[i].createdate){
                    case createdate[0]:
                        data1.push(gongshang[i]);
                        break;
                    case createdate[1]:
                        data2.push(gongshang[i]);
                        break;
                    case createdate[2]:
                        data3.push(gongshang[i]);
                        break;
                    case createdate[3]:
                        data4.push(gongshang[i]);
                        break;
                    case createdate[4]:
                        data5.push(gongshang[i]);
                        break;
                    case createdate[5]:
                        data6.push(gongshang[i]);
                        break;
                }
            }
            //逆序排序函数
            var by = function(name){
                return function(o, p){
                    var a, b;
                    if (typeof o === "object" && typeof p === "object" && o && p) {
                        a = o[name];
                        b = p[name];
                        if (a === b) {
                            return 0;
                        }
                        if (typeof a === typeof b) {
                            return a > b ? -1 : 1;
                        }
                        return typeof a > typeof b ? -1 : 1;
                    }
                    else {
                        throw ("error");
                    }
                }
            };
            var data1Length=data1.length;
            var data2Length=data2.length;
            var data3Length=data3.length;
            var data4Length=data4.length;
            var data5Length=data5.length;
            var data6Length=data6.length;
            var datatemp1=data1.sort(by("capital"));
            var showdata1=[],showdata11=[];
            var datatemp2=[],showdata2=[],showdata22=[];
            var datatemp3=[],showdata3=[],showdata33=[];
            var datatemp4=[],showdata4=[],showdata44=[];
            var datatemp5=[],showdata5=[],showdata55=[];
            var datatemp6=[],showdata6=[],showdata66=[];
            for(var i=0;i<5;i++){
                showtype.push(datatemp1[i].category)
            }
            for(var j=0;j<33;j++){
                for(var i=1;i<7;i++){
                    if(data1[j]&&data1[j].category==datatemp1[i-1].category){
                        eval("showdata"+i).push(data1[j].capital);
                        eval("showdata"+i+i).push(data1[j].ct);
                    }
                    if(data2[j]&&data2[j].category==datatemp1[i-1].category){
                        eval("showdata"+i).push(data2[j].capital);
                        eval("showdata"+i+i).push(data2[j].ct);
                    }
                    if(data3[j]&&data3[j].category==datatemp1[i-1].category){
                        eval("showdata"+i).push(data3[j].capital);
                        eval("showdata"+i+i).push(data3[j].ct);
                    }
                    if(data4[j]&&data4[j].category==datatemp1[i-1].category){
                        eval("showdata"+i).push(data4[j].capital);
                        eval("showdata"+i+i).push(data4[j].ct);
                    }
                    if(data5[j]&&data5[j].category==datatemp1[i-1].category){
                        eval("showdata"+i).push(data5[j].capital);
                        eval("showdata"+i+i).push(data5[j].ct);
                    }
                    if(data6[j]&&data6[j].category==datatemp1[i-1].category){
                        eval("showdata"+i).push(data6[j].capital);
                        eval("showdata"+i+i).push(data6[j].ct);
                    }
                }

            }
            var chart10=echarts.init(document.getElementById("chart10"));
            if(type==1){
                var option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: showtype
                    },
                    grid: {
                        left: '3%',
                        right: '12%',
                        bottom: '0%',
                        containLabel: true
                    },
                    xAxis:  {
                        name:"单位:个",
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: createdate
                    },
                    series: [
                        {
                            name: showtype[0],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data:  showdata11
                        },
                        {
                            name: showtype[1],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: showdata22
                        },
                        {
                            name: showtype[2],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: showdata33
                        },
                        {
                            name: showtype[3],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: showdata44
                        },
                        {
                            name: showtype[4],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: showdata55
                        }
                    ]
                };
            }
            if(type==2){
                var option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: showtype
                    },
                    grid: {
                        left: '3%',
                        right: '12%',
                        bottom: '0%',
                        containLabel: true
                    },
                    xAxis:  {
                        name:"单位:万元",
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: createdate
                    },
                    series: [
                        {
                            name: showtype[0],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'none'
                                }
                            },
                            data:  showdata1
                        },
                        {
                            name: showtype[1],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'none'
                                }
                            },
                            data: showdata2
                        },
                        {
                            name: showtype[2],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'none'
                                }
                            },
                            data: showdata3
                        },
                        {
                            name: showtype[3],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'none'
                                }
                            },
                            data: showdata4
                        },
                        {
                            name: showtype[4],
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'none'
                                }
                            },
                            data: showdata5
                        }
                    ]
                };
            }
            chart10.setOption(option);
        }
    });
    
};

//工艺品行业
var chart11tab=function(type,e){
    if(e){
        $(".tab11 ul li a").removeClass("chart-tab-select");
        if($(e).context.className==""){
            $(e).addClass("chart-tab-select");
        }
        else {
            $(e).removeClass("chart-tab-select");
        }
    }
    else {
        $($(".tab11 ul li a")[0]).addClass("chart-tab-select")
        $($(".tab11 ul li a")[1]).removeClass("chart-tab-select")
    }
    if(type==1){
        $.ajax({
            url:localStorage.serverurlhangye+"/api/hydt/query?class_id=29&channel_id=1&BeginPubDate=20140101&EndPubDate=20161001&keywords=&limit=10",
            success:function(data){
                $("#chart11").empty();
                var cartemp=data.data.info;
                for(var i=0;i<cartemp.length;i++){
                    $("#chart11").append('<article class="article animated fadeInUp"><div class="article-title">'+cartemp[i].title+'</div><div class="article-content">'+cartemp[i].summary+'</div><hr></article>');
                }
            }
        });
    }
    if(type==2){
        $.ajax({
            url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetGypOrder",
            success:function(data){
                data=eval("(" + data + ")");
                var gyorder=data.data;
                var gyorderLength=gyorder.length;
                $("#chart11").empty();
                for(var i=0;i<gyorderLength;i++){
                    $("#chart11").append('<article class="article animated fadeInUp"><div class="article-title">'+gyorder[i].companyname+'</div><div class="article2-content">地址：'+gyorder[i].address+'</div></article>');
                }
            }
        });
    }
};
//汽车行业
//加载更多
carcount=10;
var counts=10;
loadmore=function(e){
    carcount=carcount+10;
    $.ajax({
        url:localStorage.serverurlhangye+"/api/hydt/query?class_id=25&channel_id=2&BeginPubDate=20140101&EndPubDate=20160101&keywords=&limit="+carcount,
        success:function(data){
            $(e).delay(100).animate({"height":0},100,function(){$(e).css("display","none")});
            var cartemp=data.data.info;
            for(var i=carcount-10;i<cartemp.length;i++){
                $("#chart12").append('<article class="article animated fadeInUp"><div class="article-title">'+cartemp[i].title+'</div><div class="article-content">'+cartemp[i].summary+'</div><hr></article>');
            }
            if((data.data.info.length-counts)>9){
                counts=data.data.info.length;
                $("#chart12").append("<div class='loadmore' onclick='loadmore(this)'>加载更多……</div>") 
            }
            else {
                $("#chart12").append("<div class='loadmore'>全部加载完毕</div>")
            }
            //$(".article-title").click(function(){
            //    var classtemp=$(this).next()[0].className;
            //    if(classtemp=="article-content"){
            //        $(this).next().removeClass("article-content").addClass("article-content-all")
            //    }
            //    else {
            //        $(this).next().removeClass("article-content-all").addClass("article-content")
            //    }
            //})
        }
    });
};
var chart12tab=function(type,e){
    if(e){
        $(".tab12 ul li a").removeClass("chart-tab-select");
        if($(e).context.className==""){
            $(e).addClass("chart-tab-select");
        }
        else {
            $(e).removeClass("chart-tab-select");
        }
    }
    else {
        $($(".tab12 ul li a")[0]).addClass("chart-tab-select")
        $($(".tab12 ul li a")[1]).removeClass("chart-tab-select")
    }
    if(type==1){
        $.ajax({
            url:localStorage.serverurlhangye+"/api/hydt/query?class_id=25&channel_id=2&BeginPubDate=20140101&EndPubDate=20161001&keywords=&limit=10",
            success:function(data){
                $("#chart12").empty();
                var cartemp=data.data.info;
                for(var i=0;i<cartemp.length;i++){
                    $("#chart12").append('<article class="article animated fadeInUp"><div class="article-title">'+cartemp[i].title+'</div><div class="article-content">'+cartemp[i].summary+'</div><hr></article>');
                }
                $("#chart12").append("<div class='loadmore' onclick='loadmore(this)'>加载更多……</div>");
                //$(".article-title").click(function(){
                //    console.log($(this));
                //    var classtemp=$(this).next()[0].className;
                //    if(classtemp=="article-content"){
                //        $(this).next().append(cartemp[i].content)
                //    }
                //    else {
                //        $(this).next().removeClass("article-content-all").addClass("article-content")
                //    }
                //})
            }
        });
    }
    if(type==2){
       $.ajax({
                url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetCarOrder",
                success:function(data){
                    data=eval("(" + data + ")");
                    var carorder=data.data;
                    var carorderLength=carorder.length;
                    $("#chart12").empty();
                    for(var i=0;i<carorderLength;i++){
                        $("#chart12").append('<article class="article animated fadeInUp"><div class="article-title">'+carorder[i].companyname+'</div><div class="article2-content">地址：'+carorder[i].address+'</div></article>');
                    }
                }
            });
    }

};

//产业经济发展tab
var rightframe2=function(){
    //加载产业布局
    chart7tab();
    //加载红黑榜
    chart8tab(1,0);

    //加载工商注册信息
    chart9tab();

    //加载重点行业分析
    chart10tab(1,0);
    
    //初始化获取行业资讯
    chart11tab(1,0);
    chart12tab(1,0);
};

//政府舆情应对tab
var rightframe3=function(){
    //红黑榜
    $.ajax({
            url:localStorage.ldjscurl+"/mhstraitbd/servlet/CommonServlet/GetRedBlack",
            success:function(data){
                data=eval("(" + data + ")");
                var redblack=data.data;
                var redblackLength=redblack.length;
                for(var i=0;i<redblackLength/2;i++){
                    var j=i+1;
                    var k=i+7;
                    var m=k+1;
                    $("#redlist").append('' +
                        ' <li>'+
                        '<div class="colorleft"><img src="images/redblack/'+j+'.png"></div>'+
                        '<div class="colorright">'+
                        '<div class="colortit">'+redblack[i].event+'</div>'+
                        '<div class="clear"></div>'+
                        '<div class="colordate">'+redblack[i].time+'</div>'+
                        '<div class="coloradd">'+redblack[i].townname+'</div>'+
                        '<div class="clear"></div>'+
                        '<div class="colornotice">'+redblack[i].listreason+'</div>'+
                        '</div>'+
                        '</li>');
                    $("#blacklist").append('' +
                        ' <li>'+
                        '<div class="colorleft"><img src="images/redblack/'+m+'.png"></div>'+
                        '<div class="colorright">'+
                        '<div class="colortit">'+redblack[k].event+'</div>'+
                        '<div class="clear"></div>'+
                        '<div class="colordate">'+redblack[k].time+'</div>'+
                        '<div class="coloradd">'+redblack[k].townname+'</div>'+
                        '<div class="clear"></div>'+
                        '<div class="colornotice">'+redblack[k].listreason+'</div>'+
                        '</div>'+
                        '</li>')
                }
            }
        });
};
