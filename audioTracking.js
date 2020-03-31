jQuery(document).ready(function(){

  jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.played", function(event, index){
    console.log(index);
    mediaSDK.logPlay({
        customAttributes: {
            mediaType: 'Audio'
        }
    });
});

  jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.paused", function(event, index){
    console.log(index);
    mediaSDK.logPause({
        currentPlayheadPosition: data.current,
        customAttributes: {
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

window.mediaSDK.mediaEventListener = function(event) {
    console.log('Picking up Media Event', event);
    console.log('Example page event', event.toPageEvent());
    if (event.name === 'Play') {
        console.log('mParticle Media SDK fired play event');
        mediaSDK.logPlay();
    }
};
