
class Card
  attr_reader :suit, :value, :name

def initialize(suit, value)
  @suit = suit
  @value = value
  @name = "#{value} of #{suit}"
end

end
