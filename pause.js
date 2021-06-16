var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Switch;

function runAsGUI(f)
{
context.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
f();
}catch(e){
print(e);
}
}}));
}

function showSwitch()
{
runAsGUI(function()
{
var layout = new android.widget.LinearLayout(context);

var button = new android.widget.Switch(context);
var pause = false;
button.setChecked(pause);
button.setText(pause ? "continue" : "pause");
button.setOnCheckedChangeListener(function()
{
pause = !pause;
button.setChecked(pause);
button.setText(pause ? "continue" : "pause");
ModPE.setGameSpeed(pause ? 0 : 20);
});
layout.addView(button);

Switch = new android.widget.PopupWindow(layout,android.view.ViewGroup.LayoutParams.WRAP_CONTENT,android.view.ViewGroup.LayoutParams.WRAP_CONTENT);

Switch.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,0);
});
}


function deleteWindow(window)
{
if(window)
{
window.dismiss();
window = null;
}
}


function newLevel()
{
showSwitch();
}

function leaveGame()
{
deleteWindow(Switch);
}



