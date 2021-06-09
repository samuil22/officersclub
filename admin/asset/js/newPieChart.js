am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.legend = new am4charts.Legend();
chart.data = [{
    food: "Lunch Menu",
    value: 380 },
{
    food: "Juice & Drinks",
    value: 201},
{
    food: "Ice-Cream",
    value: 65},
{
    food: "Tea & Coffee",
    value: 39},
{
    food: "Weekly Special",
    value: 19},
{
    food: "Bangla Snacks",
    value: 10}];
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "food";
    
    }); // end am4core.ready()