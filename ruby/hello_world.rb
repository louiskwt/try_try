name = "Suzuka"
age = 24

def say_hello(name)
  puts "Hello, #{name}!"
end

say_hello(name)

over18 = "Ometedo! You're an adult"
under18 = "Oh, you're too young, "
user = {name: "Moa", from: "Metalverse"}

if age >= 18
  puts "Hi, #{user[:name]} #{over18}"
else
  puts "#{under18} #{user[:name]}"
end


# array
numbers = [1, 2, 3, 4, 5]

squared_nums = numbers.map do |number|
  number * number
end

puts squared_nums.inspect
puts numbers.inspect


numbers.each do |number|
  if number % 2 == 0
    puts "even: #{number}"
  else
    puts "odd: #{number}"
  end
end

def square(x)
  x * x
end

def square_of_largest(x, y, z)
  sum = square(x) + square(y) + square(z) - square([x, y, z].min)
end

puts square_of_largest(3, 2, 3)  # 18
puts square_of_largest(3, 2, 5)  # 34