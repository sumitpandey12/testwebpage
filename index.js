document.getElementById("btn").addEventListener("click", () => {
  const videoURL= "https://tnplayer.com/NOVyl";
  window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`;
});
