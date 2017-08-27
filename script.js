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
        $('.ping').text("Ping " + ping + "ms");
        $('.ping_calculated').text("Ping w/ calculation " + ping_calculated + "ms");
}
});
