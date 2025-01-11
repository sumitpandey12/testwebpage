// document.getElementById("btn").addEventListener("click", () => {
//   const videoURL= "https://tnplayer.com/NOVyl";
//   window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`;
// });

const vURL='https://tnplayer4993-a43329ca83d5.herokuapp.com/59434/Valliyin_Velan_S01E20_Valliyin_Velan_September_27_2024_360p_ZEE5.mkv'

document.getElementById("btn").addEventListener("click", () => {
  const videoURL= "https://tnplayer.com/EAXFm";
   // window.location.href = `intent:https://tnplayer.com/EAXFm#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;end`;
	 window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`, '_blank';
});

document.getElementById("btn2").addEventListener("click", () => {
  const videoURL= "https://tnplayer4993-a43329ca83d5.herokuapp.com/59434/Valliyin_Velan_S01E20_Valliyin_Velan_September_27_2024_360p_ZEE5.mkv?hash=AgAD4h?api=122.161.69.8";
   window.location.href = `intent:${videoURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;end`;
});

document.getElementById("btn1").addEventListener("click", () => {
  const videoURL= "http://tnplayer4993-a43329ca83d5.herokuapp.com/39694/%2540TamilMob_LinkZz%2B%2B-%2BVisfot%2B%25282024%2529%2BWEB-DL%2B-%2B1080p%2B-%2BAVC%2B-%2B%2528AA.mkv";
   window.location.href = `intent:${vURL}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`, '_blank';
});
