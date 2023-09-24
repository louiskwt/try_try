val profile = {name = "Moa", id = 232, age = 23, active = true};
val x = {bar = (1+2,true andalso true), foo = 3+4, baz = (false,9) };

#name profile;
#age profile + #foo x;

(* #bar profie  --> accessing non-existing field will cause run time error *)


(* data binding *)

datatype mytype = ThreeInts of int * int * int | TwoBools of bool * bool | Str of string; (* One of type *)

val x = ThreeInts(1+1,2,3);
val name = Str("Moa");
val y = TwoBools(true, false);
val con = TwoBools; (* Constructor can be passed as a function *)

(* pattern matching *)
fun f (x: mytype) = 
    case x of
        ThreeInts(i1, i2, i3) => i1 + i3
        | TwoBools(b1, b2) => if b2 then 1 else 0
        | Str(s) => size s;

val z = f(ThreeInts (1, 2, 9));
val w = f(TwoBools (true, false));
val v = f(Str("Moa"));
