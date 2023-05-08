; this requires the simple-scheme ext

(define (plural wd)
        (if (equal? (last wd) 'y)
        (word (bl wd) 'ies)
        (word wd 's)))

; TODO: Fix Boy -> Boies issue
