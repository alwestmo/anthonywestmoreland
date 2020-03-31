jQuery(document).ready(function(){

  jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.played", function(event, index){
    console.log(index);
    const mediaSession = new MediaSession(
    mParticle,                    // mParticle SDK Instance
    '000111',                    // Custom Media ID
    'Westworld Audio Content',   // Custom Media Title
    95000,                       // Duration in milliseconds
    'Audio',                      // Content Type (Video or Audio)
    'OnDemand'                    // Stream Type (OnDemand, Live, etc.)
    true                          // Log Page Event Toggle (true/false)
    )
});

  jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.paused", function(event, index){
    console.log(index);
});

  jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.stopped", function(event, index){
    console.log(index);
});

  jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.playprogress", function(event, data){
    console.log(data);
    console.log(data.current);
    console.log(data.duration);
});

  jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.switched", function(event, data){
    console.log(data);
    console.log(data.previous);
    console.log(data.current);
});
});
