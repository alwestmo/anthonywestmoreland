import MediaSession from '@mparticle/web-media-sdk';

jQuery(document).ready(function(){

    window.mediaSession = new MediaSession(
        mParticle,                    // mParticle SDK Instance
        '1234567',                    // Custom media ID
        'Westworld Audio File',   // Custom media Title
        95000,                       // Duration in milliseconds
        'Audio',                      // Content Type (Video or Audio)
        'OnDemand',                    // Stream Type (OnDemand, Live, etc.)
        true,
        true
    );

    var sessionStarted = false;

    jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.played", function(event, index){
        console.log(index);
        if (!sessionStarted) {
            mediaSession.logSessionStart();
            sessionStarted = true;
        }
        mediaSession.logPlay({
            customAttributes: {
                mediaType: 'Audio'
            }
        });
    });

    jQuery("#amazingaudioplayer-1").bind("amazingaudioplayer.paused", function(event, index){
        console.log(index);
        mediaSession.logPause({
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

    window.mediaSession.mediaEventListener = function(event) {
        console.log('Picking up Media Event', event);
        console.log('Example page event', event.toPageEvent());
        if (event.name === 'Play') {
            console.log('mParticle Media SDK fired play event');

            var customPageEvent = mediaSession.createPageEvent('AlternativePlay', {
                something: 'audio custom event'
            });

            window.mParticle.logBaseEvent(customPageEvent);
        }
    };
});
