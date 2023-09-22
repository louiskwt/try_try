val profile = {name = "Moa", id = 232, age = 23, active = true};
val x = {bar = (1+2,true andalso true), foo = 3+4, baz = (false,9) };

#name profile;
#age profile + #foo x;