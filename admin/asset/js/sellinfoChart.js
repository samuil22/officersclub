am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdivSales", am4charts.XYChart);
    
    // Export
    chart.exporting.menu = new am4core.ExportMenu();
    
    // Data for both series
    var data = [ {
      "day": "Thu",
      "income": 23.5,
      "expenses": 21.1
    }, {
      "day": "Fri",
      "income": 26.2,
      "expenses": 30.5
    }, {
      "day": "Sat",
      "income": 30.1,
      "expenses": 34.9
    }, {
      "day": "Sun",
      "income": 29.5,
      "expenses": 31.1
    }, {
      "day": "Mon",
      "income": 30.6,
      "expenses": 28.2,
      "lineDash": "5,5",
    }, {
      "day": "Tue",
      "income": 34.1,
      "expenses": 32.9, 
      "lineDash": "5,3",  
    }, {
      "day": "wed",
      "income": 34.1,
      "expenses": 32.9,
      "strokeWidth": 1,
      "columnDash": "5,5",
      "fillOpacity": 0.2,
      "additional": "(projection)"
    } ];
    
    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "day";
    categoryAxis.renderer.minGridDistance = 30;
    
    /* Create value axis */
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    /* Create series */
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "Income";
    columnSeries.dataFields.valueY = "income";
    columnSeries.dataFields.categoryX = "day";
    
    columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.tooltip.label.textAlign = "middle";
    
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Expenses";
    lineSeries.dataFields.valueY = "expenses";
    lineSeries.dataFields.categoryX = "day";
    
    lineSeries.stroke = am4core.color("#fdd400");
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";
    
    var bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
    bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    var circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;
    
    chart.data = data;
    
    }); // end am4core.ready()