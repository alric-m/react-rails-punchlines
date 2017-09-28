# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'net/http'

puts "Delete all punchlines!"
Punchline.delete_all
puts "Done!"

puts "Fetching punchline json for seeds from https://gist.githubusercontent.com/lambda2/cb88d3c23475f2db1cc96bdcdee4f02c/raw/bb4acc4b68d854ec7444fa8925bc88d1de375bb4/punchlines.json (thanks a lot lambda2 !)"
source = "https://gist.githubusercontent.com/lambda2/cb88d3c23475f2db1cc96bdcdee4f02c/raw/bb4acc4b68d854ec7444fa8925bc88d1de375bb4/punchlines.json"
resp = Net::HTTP.get_response(URI.parse(source))
data = resp.body
results = JSON.parse(data)

puts "Formatting results for our database!"
results.each do |punchline_params|
  # we don't need tags
  punchline_params.delete("tags")

  # rename key according our data model
  punchline_params["text"] = punchline_params["content"].gsub("« ", "").gsub(" »", "")
  punchline_params.delete("content")

  punchline_params["song"] = punchline_params["title"]
  punchline_params.delete("title")
end
puts "Done!"

puts "Seeding..."
Punchline.create! results

puts "Punchlines seeded!"
puts "#{Punchline.count} punchlines!"
