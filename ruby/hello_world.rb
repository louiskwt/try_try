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

