require('minitest/autorun')
require('minitest/rg')


require_relative('../card.rb')
require_relative('../CardGame.rb')



class Testing_task_2_test < MiniTest::Test

  def setup
    @card1 = Card.new("Spades", 4)
    @card2 = Card.new("Hearts", 7)
    @card3 = Card.new("Diamonds", 1)
    @game = CardGame.new()
    cards = [@card1, @card2, @card3]

  end

  def test_canCheckForAce()
    assert_equal(true, @game.checkforAce(@card3))
    assert_equal(false, @game.checkforAce(@card2))
  end

  def test_highest_card()
    assert_equal("7 of Hearts", @game.highest_card(@card2, @card1))
  end

  def test_cards_total()
    cards = [@card1, @card2, @card3]
    assert_equal("You have a total of 12", @game.cards_total(cards))
  end

end
