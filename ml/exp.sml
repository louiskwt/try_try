datatype exp = Constant of int
             |  Negate of exp
             |  Add of exp * exp
             |  Multiply of exp * exp

fun max_constant e =
    let fun max_of_two (e1, e2) =
            let val m1 = max_constant e1
                val m2 = max_constant e2
            in
                Int.max (m1, m2)
            end
    in
        case e of
            Constant i => i
          | Negate e2 => max_constant e2
          | Add (e1, e2) => max_of_two (e1, e2)
          | Multiply (e1, e2) => max_of_two (e1, e2)
    end

val test_exp = Add (Constant 19, Negate (Constant 4))
val test1 = max_constant test_exp = 19
val test_exp2 = Multiply (Constant 19, Multiply (Constant 4, Constant 7))
val test2 = max_constant test_exp2 = 19

fun min_constant e =
    case e of
        Constant i => i
        | Negate e2 => ~ (min_constant e2)
        | Add (e1, e2) => Int.min (min_constant e1, min_constant e2)
        | Multiply (e1, e2) => Int.min (min_constant e1, min_constant e2)

val test3 = min_constant test_exp = ~4
val test4 = min_constant test_exp2 = 4