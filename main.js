function preload()
{

}

function setup()
{
    canvas = createCanvas(600, 380);
    canvas.position(110, 100);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{

    image(video, 150, 100, 300, 200);

   stroke("#FF0000");
   fill('#FF0000');
   circle(560, 340, 50);
   circle(560, 40, 50);
   circle(40, 340, 50);
   circle(40, 40, 50);
   stroke("#000000");
   fill('#000000');
   rect(555, 65, 10, 250);
   rect(35, 65, 10, 250);
   rect(65, 40, 470, 10);
   rect(65, 340, 470, 10);
}

function take_snapshot()
{
    save('birthday_frame.png')
}