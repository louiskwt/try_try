(* Section 1 *)
val x = 12;
val y = 28;
val z = x + y;
val boo = x < y;
if x > 20 then x + y else x div 4;

(* function definition *)
fun isEven (x: int) = (* check if an int is even *)
    if x mod 2 = 0
    then true
    else false

fun square (x:int) = 
    x * x

(* pairs *)
fun swap (pr: int*bool) =
    (#2 pr, #1 pr)


val p = (1, false);
