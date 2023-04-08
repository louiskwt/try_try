name = "Piggy"

str = "Hello " .. name

print(str)


-- comment

-- [[
--lol
--]]

a = 5
local b = 28

function number()
    c = a * 5
    local d = 5 * 2
    print(c)
end

number()
print(b)
print(c, d)

do
    local a = 6
    b = 30
    print(a, b)
end