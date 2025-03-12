// document.getElementById("btn").addEventListener("click", () => {
//   const videoURL= "https://tnplayer.com/NOVyl";
//   window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`;
// });

const vURL='https://pub-b867598499504e3a9d1fc63c090b6cf2.r2.dev/Love%20Next%20Door%20EP.10.v2.480p.mp4'

document.getElementById("btn").addEventListener("click", () => {
  const videoURL= "https://tnplayer.com/EAXFm";
   window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`, '_blank';
});

document.getElementById("btn1").addEventListener("click", () => {
  const videoURL= "http://tnplayer4993-a43329ca83d5.herokuapp.com/39694/%2540TamilMob_LinkZz%2B%2B-%2BVisfot%2B%25282024%2529%2BWEB-DL%2B-%2B1080p%2B-%2BAVC%2B-%2B%2528AA.mkv";
   window.location.href = `intent:${vURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`, '_blank';
});

document.getElementById("btn2").addEventListener("click", () => {
  const videoURL= `${vURL}?api=af9359286a557911b6989d43009b37bb`;
   window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`, '_blank';
});

document.getElementById("btn3").addEventListener("click", () => {
  const videoURL = "https://tnplayer.in/app/EAXFm";  // Corrected URL: .in, not .com
  // Corrected intent format and MOST IMPORTANTLY, added the scheme
  window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`, '_blank';
});
