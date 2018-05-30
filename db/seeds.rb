# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
user = User.create(
    email: 'faethon@me.com',
    password: 'password')

5.times do | index|
  user.posts.create!(
    content: "#{FFaker::BaconIpsum.paragraph}"
  )
end
