var video = document.querySelector("#video-webcam");

    // ask for user permission
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    // if the user gives permission
    if (navigator.getUserMedia) {
        // run handleVideo, and videoError functions if permission is denied
        navigator.getUserMedia({ video: true }, handleVideo, videoError);
    }

    // this function will be executed if permission has been given
    function handleVideo(stream) {
        video.srcObject = stream;
    }

    // this function will be executed if the user refuses permission
    function videoError(e) {
        // do something
        alert("Allow using a webcam for a demo!")
    }
function takeSnapshot() {
    // buat elemen img
    var img = document.createElement('img');
    var context;

    // ambil ukuran video
    var width = video.offsetWidth
            , height = video.offsetHeight;

    // buat elemen canvas
    canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    // ambil gambar dari video dan masukan 
    // ke dalam canvas
    context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);

    // render hasil dari canvas ke elemen img
    img.src = canvas.toDataURL('image/png');
    document.body.appendChild(img);
}