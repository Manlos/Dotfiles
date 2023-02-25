<!-- a div where the div will be placed -->
<div id="audio-spectrum"></div>

<script>
    // Create an instance of wave surfer with its configuration
    var Spectrum = WaveSurfer.create({
        container: '#audio-spectrum',
        // Add some color to the audio spectrum
        progressColor: "#03a9f4"
    });
    
    Spectrum.on("ready", function(){
        // Do something when the file has been loaded
        
        // Do whatever you need to do with the player
        Spectrum.play();
        Spectrum.pause();
        Spectrum.stop();
    });

    // Load the audio file from your own domain !
    Spectrum.load('audio-file.mp3');
</script>