-- Print Mario Block
function block()
    return "*"
end

function mario(n)
    local row = n
    for i = 0, row do
        for j = 1, i do
            io.write(block())
        end

        if (i > 0)
        then
            io.write("\n")
        end
    end
end


mario(9)