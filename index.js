document.getElementById("btn").addEventListener("click", () => {
  const videoURL= "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8";
  window.location.href = `intent:${videoURL}#Intent;package=com.sumit.player;action=android.intent.action.VIEW;type=video/*;end`;
});
