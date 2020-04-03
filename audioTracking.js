jQuery(document).ready(function(){
    var sessionStarted = false;

    jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.played", function(event, index){
        console.log(index);
        mediaSDK.logSessionStart();
        sessionStarted = true;
        mediaSDK.logPlay({
            customAttributes: {
                mediaType: 'Audio'
            }
        });
    });

    jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.paused", function(event, index){
        console.log(index);
        mediaSDK.logPause({
            customAttributes: {
                currentPlayheadPosition: data.current,
                exampleAttribute: 'I HAZ PAWZ'
            }
        });
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

