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


val p = (1, false)

val x = (3, (4, (5, 6)));
val y = (#2 x, (#1 x, #2 (#2 x)));

val ans = (#2 y, 4);
(* ans = ((3,(5,6)),4) : (int * (int * int)) * int *)

(* list *)
val x = [5, 1, 6, 8];

(* check if list is null *)
null x;  (* false ; null is a function in ml *)

(* accessing element *)
hd (tl (tl x));  (* return 6 *)

(* join list *)
1::x;

(* let local binding *)
fun silly3 () =
    let 
      val x = (let val x = 5 in x + 10 end); (* x = 15 *)
    in
      (x, let val x = 2 in x end, let val x = 10 in let val x = 2 in x end end)
    end
(* evaluate to (15, 2, 2) *)

(* nested function *)
fun countup_from1 (x : int) = 
    let fun count (from : int) =
            if from = x 
            then x :: []
            else from :: count(from+1)
    in
        count (1)
    end
