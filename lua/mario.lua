-- Print Mario Block
function block()
    return "*"
end

function space()
    return " "
end

function mario(n)
    local row = n
    for i = 1, row, 1 do
        for j = 1, row, 1 do
            if (j + i <= row)
            then
                io.write(space())
            else
                io.write(block())
            end
        end
    
        io.write("\n")
     
    end
end


mario(9)