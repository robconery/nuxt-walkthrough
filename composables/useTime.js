export default function(){
  //based on code from here https://gist.github.com/g1eb/62d9a48164fe7336fdf4845e22ae3d2c
  const toDuration =function(num){
    if(!num) return;
    if(num.toString().indexOf(":") > 0) return num;
    var sec_num = parseInt(num, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
  }

  return {
    toDuration
  }
}