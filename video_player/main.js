var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 

/*

https://www.w3schools.com/tags/ref_av_dom.asp

Method			Description
addTextTrack()	Adds a new text track to the audio/video
canPlayType()	Checks if the browser can play the specified audio/video type
load()			Re-loads the audio/video element
play()			Starts playing the audio/video
pause()			Pauses the currently playing audio/video
------------------------------------------------------------------------------

Property			Description
audioTracks			Returns an AudioTrackList object representing available audio tracks
autoplay			Sets or returns whether the audio/video should start playing as soon as it is loaded
buffered			Returns a TimeRanges object representing the buffered parts of the audio/video
controller			Returns the MediaController object representing the current media controller of the audio/video
controls			Sets or returns whether the audio/video should display controls (like play/pause etc.)
crossOrigin			Sets or returns the CORS settings of the audio/video
currentSrc			Returns the URL of the current audio/video
currentTime			Sets or returns the current playback position in the audio/video (in seconds)
defaultMuted		Sets or returns whether the audio/video should be muted by default
defaultPlaybackRate	Sets or returns the default speed of the audio/video playback
duration			Returns the length of the current audio/video (in seconds)
ended				Returns whether the playback of the audio/video has ended or not
error				Returns a MediaError object representing the error state of the audio/video
loop				Sets or returns whether the audio/video should start over again when finished
mediaGroup			Sets or returns the group the audio/video belongs to (used to link multiple audio/video elements)
muted				Sets or returns whether the audio/video is muted or not
networkState		Returns the current network state of the audio/video
paused				Returns whether the audio/video is paused or not
playbackRate		Sets or returns the speed of the audio/video playback
played				Returns a TimeRanges object representing the played parts of the audio/video
preload				Sets or returns whether the audio/video should be loaded when the page loads
readyState			Returns the current ready state of the audio/video
seekable			Returns a TimeRanges object representing the seekable parts of the audio/video
seeking				Returns whether the user is currently seeking in the audio/video
src					Sets or returns the current source of the audio/video element
startDate			Returns a Date object representing the current time offset
textTracks			Returns a TextTrackList object representing the available text tracks
videoTracks			Returns a VideoTrackList object representing the available video tracks
volume				Sets or returns the volume of the audio/video
----------------------------------------------------------------------------------------

Event			Description
abort			Fires when the loading of an audio/video is aborted
canplay			Fires when the browser can start playing the audio/video
canplaythrough	Fires when the browser can play through the audio/video without stopping for buffering
durationchange	Fires when the duration of the audio/video is changed
emptied			Fires when the current playlist is empty
ended			Fires when the current playlist is ended
error			Fires when an error occurred during the loading of an audio/video
loadeddata		Fires when the browser has loaded the current frame of the audio/video
loadedmetadata	Fires when the browser has loaded meta data for the audio/video
loadstart		Fires when the browser starts looking for the audio/video
pause			Fires when the audio/video has been paused
play			Fires when the audio/video has been started or is no longer paused
playing			Fires when the audio/video is playing after having been paused or stopped for buffering
progress		Fires when the browser is downloading the audio/video
ratechange		Fires when the playing speed of the audio/video is changed
seeked			Fires when the user is finished moving/skipping to a new position in the audio/video
seeking			Fires when the user starts moving/skipping to a new position in the audio/video
stalled			Fires when the browser is trying to get media data, but data is not available
suspend			Fires when the browser is intentionally not getting media data
timeupdate		Fires when the current playback position has changed
volumechange	Fires when the volume has been changed
waiting			Fires when the video stops because it needs to buffer the next frame




*/