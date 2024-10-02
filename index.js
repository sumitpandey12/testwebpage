const test = "http://tnplayer4993-a43329ca83d5.herokuapp.com/44127/%2540CSZMovies%2B-%2B-%2BPetta%2BRap%2B%25282024%2529%2B%255BTamil%2B-%2B720p%2BProper%2BHQ-REAL.mkv?hash=AgAD1h";

document.getElementById("btn").addEventListener("click", () => {
  const videoURL= "http://tnplayer4993-a43329ca83d5.herokuapp.com/39694/%2540TamilMob_LinkZz%2B%2B-%2BVisfot%2B%25282024%2529%2BWEB-DL%2B-%2B1080p%2B-%2BAVC%2B-%2B%2528AA.mkv?hash=AgAD7R";
  window.location.href = `intent:url=${test}#Intent;package=com.qp.jplayer;action=android.intent.action.VIEW;type=video/*;end`;
});
