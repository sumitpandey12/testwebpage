// document.getElementById("btn").addEventListener("click", () => {
//   const videoURL= "https://tnplayer.com/NOVyl";
//   window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`;
// });

document.getElementById("btn").addEventListener("click", () => {
  // const videoURL= "http://tnplayer4993-a43329ca83d5.herokuapp.com/39694/%2540TamilMob_LinkZz%2B%2B-%2BVisfot%2B%25282024%2529%2BWEB-DL%2B-%2B1080p%2B-%2BAVC%2B-%2B%2528AA.mkv?hash=abc";
  const videoURL= "url=http://tnplayer4993-a43329ca83d5.herokuapp.com/39694/%2540TamilMob_LinkZz%2B%2B-%2BVisfot%2B%25282024%2529%2BWEB-DL%2B-%2B1080p%2B-%2BAVC%2B-%2B%2528AA.mkv?hash=abc";
   window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;end`;
});
