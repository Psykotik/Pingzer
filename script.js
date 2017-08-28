var ping = new Date;
var percentage = 0.5; // Percentage applied to ping calculation (based on my connexion, this is really experimental).
                      // This compensate JS ping calculation latency
var ping_calculated = 0;

$.ajax({
    url: "http://psykotik.fr/ping",
    cache:false,
    success: function(output){
        ping = new Date - ping;
        ping_calculated = ping * percentage;
        ping_calculated = Math.round(ping_calculated);
        $('#ping').text("Raw ping " + ping + "ms");
        $('#ping_calculated').text(ping_calculated + "ms");
        console.log("ping");




        if(ping>250) {
          document.getElementById("result").classList.add('sup250');
        } else if(ping>190) {
          document.getElementById("result").classList.add('sup190');
        }  else if(ping>175) {
          document.getElementById("result").classList.add('sup175');
        }  else if(ping>150) {
          document.getElementById("result").classList.add('sup150');
        }  else if(ping>135) {
          document.getElementById("result").classList.add('sup135');
        } else if(ping>120) {
          document.getElementById("result").classList.add('sup120');
        }  else if(ping>110) {
          document.getElementById("result").classList.add('sup110');
        }  else if(ping>90) {
          document.getElementById("result").classList.add('sup90');
        }else if(ping>75) {
          document.getElementById("result").classList.add('sup75');
        } else if(ping>50) {
          document.getElementById("result").classList.add('sup50');
        }  else if(ping<50) {
          document.getElementById("result").classList.add('inf50');
        }
}
});
