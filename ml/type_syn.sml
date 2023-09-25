type date = int * int * int
type s = string


(* date * s -> date  not interchangable *)
(*
The order of arguments to a function matters, so date * s and s * date are not the same, but we can always replace a type synonym with its definition or vice-versa
*)