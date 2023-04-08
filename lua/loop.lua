tbl1 = {}
tbl1["doggy"] = "woof"
key = "duck"
tbl1[key] = "quack"

for k, v in pairs(tbl1) do
    print(k .. " say " .. v)
end

local tbl2 = {"item 1", "item 2", "item 3"}

for k, v in pairs(tbl2) do
    -- index start with 1
    print(k)
end

-- empty table is not nil
tbl3 = {}

print(type (tbl3) == "nil" )

print(type (x) == nil) -- false
print(type (x) == "nil") -- true

function block()
    return "*"
end

for i = 1, 10 do
    for j = 2, i do
        io.write(block())
    end
    io.write("\n")
end

