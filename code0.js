gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDSliderObjects1= [];
gdjs.New_32sceneCode.GDSliderObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slider"), gdjs.New_32sceneCode.GDSliderObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setAnimationSpeedScale((( gdjs.New_32sceneCode.GDSliderObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 1);
}
}{runtimeScene.getVariables().get("slideSpeed").setNumber((( gdjs.New_32sceneCode.GDSliderObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setAngle((( gdjs.New_32sceneCode.GDSliderObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * gdjs.randomInRange(-(4), 4));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setPosition(75 + gdjs.randomFloatInRange(-(1), 1) * (( gdjs.New_32sceneCode.GDSliderObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))),gdjs.randomInRange(-(3), 3) * (( gdjs.New_32sceneCode.GDSliderObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 2);
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100 - (( gdjs.New_32sceneCode.GDSliderObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 2, (( gdjs.New_32sceneCode.GDSliderObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "trilli.ogg", 1, true, 100, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "trilli2.ogg", 2, true, 0, 1);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDSliderObjects1.length = 0;
gdjs.New_32sceneCode.GDSliderObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
