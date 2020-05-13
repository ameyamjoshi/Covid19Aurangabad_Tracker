$(document).ready(function() {

    $.getJSON("https://api.covid19india.org/districts_daily.json",function(data){
        // var states=[];
        console.log("hello");
        // var confirmed=[];
        // var recovered=[];
        // var deaths=[];
        var n=data.districtsDaily.Maharashtra.Aurangabad.length;
        console.log(data.districtsDaily.Maharashtra.Aurangabad[n-1].confirmed);
        console.log(data.districtsDaily.Maharashtra.Aurangabad[n-1].date);
        console.log(data.districtsDaily.Maharashtra.Aurangabad);
        console.log(data.districtsDaily.Maharashtra.Aurangabad[n-1].active)
        var total_confirmed; 
        var confirmed_date;
        var total_active;
        var total_recovered;
        var recovery_rate;
        var total_deaths;
        total_confirmed=data.districtsDaily.Maharashtra.Aurangabad[n-1].confirmed;
        confirmed_date=data.districtsDaily.Maharashtra.Aurangabad[n-1].date;
        total_active=data.districtsDaily.Maharashtra.Aurangabad[n-1].active;
        // total_active=data.statewise[0].active;
        // total_recovered=data.statewise[0].recovered;
        // total_deaths=data.statewise[0].deaths;
        total_recovered= data.districtsDaily.Maharashtra.Aurangabad[n-1].recovered;
        total_deaths=data.districtsDaily.Maharashtra.Aurangabad[n-1].deceased;
        recovery_rate=(total_recovered/total_confirmed)*100;
        console.log(total_recovered/total_confirmed);
        var death_rate;
        death_rate=(total_deaths/total_confirmed)*100;
        $("#confirmed").append(total_confirmed);
    $("#recovered").append(total_recovered);
    $("#recovery_rate").append( recovery_rate.toFixed(2));
    $(".confirmed_date").append(confirmed_date);
    $("#death_rate").append(death_rate.toFixed(2))
     $("#active").append(total_active);
     $("#deceased").append(total_deaths);    

    });

    $.getJSON("https://api.covid19india.org/data.json",function(data1){

      console.log(data1.statewise[1]["confirmed"]);
      var mah_confirmed=data1.statewise[1]["confirmed"];
      $("#mah_confirm").append(mah_confirmed);

      var mah_active=data1.statewise[1]["active"];
      $("#mah_active").append(mah_active);

      var mah_recover=data1.statewise[1]["recovered"];
      $("#mah_recover").append(mah_recover);

      var mah_deaths=data1.statewise[1]["deaths"];
      $("#mah_deaths").append(mah_deaths);


      var recovery_rate_mah=(mah_recover/mah_confirmed)*100;
    console.log(recovery_rate_mah);
    var death_rate_mah=(mah_deaths/mah_confirmed)*100;
      $("#recovery_rate_mah").append( recovery_rate_mah.toFixed(2));
      $("#death_rate_mah").append( death_rate_mah.toFixed(2));
});
});



