fun sum_list(xs : int list) =
    if null xs
    then 0
    else hd xs + sum_list(tl xs)

fun cond_sum(xs: (int * int) list, m: int) =
    if null xs then
        0
    else if #2 (hd xs) = m then
        1 + cond_sum(tl xs, m)
    else
        0 + cond_sum(tl xs, m);

fun list_product (xs : int list) =
    if null xs
    then 1
    else hd xs * list_product(tl xs)

fun countdown (x : int) = 
    if x=0
    then []
    else x :: countdown(x-1)

fun append (xs : int list, ys : int list) =
    if null xs
    then ys
    else (hd xs) :: append((tl xs), ys)

(* function over pair of list *)
fun sum_pair_list (xs : (int * int) list) = 
    if null xs
    then 0
    else #1 (hd xs) + #2 (hd xs) + sum_pair_list(tl xs)

fun firsts (xs : (int * int) list) = (* [3, 5]*)
    if null xs
    then []
    else (#1 (hd xs)) :: firsts(tl xs)

fun seconds (xs : (int * int) list) = (* [3, 5]*)
    if null xs
    then []
    else (#2 (hd xs)) :: seconds(tl xs)

fun sum_pair_list2 (xs : (int * int) list) =
    (sum_list (firsts xs)) + (sum_list (seconds xs)) 

fun factorial (ns : int) = list_product(countdown ns)
