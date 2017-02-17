TinyTurtle.apply(window);

function square (width){

forward(width);
right(90);
forward(width);
right(90);
forward(width);
right(90);
forward(width);
right(45);
forward(width);
right(90);
forward(width);
right(90);
forward(width);
right(90);
forward(width);
right(45);
forward(width);
right(90);
forward(width);
right(90);
forward(width);
right(90);
forward(width);
right(45);
}

function shape(x) {
square(2*x);
square(x);
square(x+15);
square(x+30);
}

stamp();

shape(34);