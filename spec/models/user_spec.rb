require 'rails_helper'

describe User do 
  it "is valid with a username, email , twitch_id , steam_id , solo_mmr , party_mmr"
  it "is invalid without a username"
  it "is invalid without a email"
  it "is invalid without a steam id"
  it "is invalid without an email address"
  it "is invalid with a duplicate email address"
  it "returns a user's steam_id as a string"
end