# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20111119014450) do

  create_table "pledges", :force => true do |t|
    t.string   "full_name"
    t.string   "email"
    t.float    "amount"
    t.float    "lat"
    t.float    "long"
    t.integer  "time"
    t.string   "charity_name"
    t.text     "charity_text"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
