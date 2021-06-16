var OGL;

function newLevel()
{
var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
activity.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
var window = new android.widget.LinearLayout(activity);
window.setOrientation(window.VERTICAL); 

var btn = new android.widget.Button(activity);
btn.setText('arrow');
btn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){

var p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180;
var y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180;
var xx=Math.sin(p)*Math.cos(y);
var yy=Math.sin(p)*Math.sin(y);
var zz=Math.cos(p);
arrow = Level.spawnMob(getPlayerX()+xx,getPlayerY()+zz,getPlayerZ()+yy,80);
setVelX(arrow,2.5*xx);
setVelY(arrow,2.5*zz);
setVelZ(arrow,2.5*yy);
}
}));
window.addView(btn);

OGL = new android.widget.PopupWindow(window, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
OGL.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 OGL.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, 0, 0);
}catch(err){
print('An error occured: ' + err);
}
}
}));
}

function leaveGame()
{
var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
activity.runOnUiThread(new java.lang.Runnable({ run: function(){
if(OGL != null)
{
OGL.dismiss();
OGL = null;
}
}
}));
}