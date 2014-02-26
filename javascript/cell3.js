autowatch = 1;
mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;


var dis_width = box.rect[2] - box.rect[0];
var dis_height = box.rect[3] - box.rect[1];
var alpha=0.


function bang()
{
	mgraphics.redraw();
}


function onresize(w, h)
{
	dis_width = w;
	dis_height = h;
}

function paint()
{
	with (mgraphics) {
		set_source_rgba(0., 0., 0.,1.);
		ellipse(-alpha,alpha,alpha*2,alpha*2);
		//ellipse(0.,0.,0.15,0.15);
		fill();
		set_line_width(.03);
		move_to(-0.21, 0);
		line_to(0.21, 0.);
		stroke()
		move_to(0, -0.21);
		line_to(0., 0.21);
		stroke();
	}
}

function ondrag(x,y)
{
	var width = box.rect[2] - box.rect[0];
	var height = box.rect[3] - box.rect[1];
		
	if (x<0) x = 0;
	else if (x>width) x = width;
	if (y<0) y = 0;
	else if (y>height) y = height;

	alpha = 1.- y/height;
	outlet(0,alpha * 127);
	notifyclients();
	bang();
}
ondrag.local = 1; //private

function getvalueof() 
{
return alpha * 127;

}

function setvalueof(v)
{
	v = alpha * 127;
}

function value()
{
	alpha = arguments[0];
	bang();
}