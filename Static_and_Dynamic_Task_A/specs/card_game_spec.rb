require("minitest/autorun")
require('minitest/rg')
require_relative("../card_game")
require_relative("../card")

class CardGameTest < MiniTest::Test

  def setup
    @game1 = CardGame.new()
    @card1 = Card.new("Club", 1)
    @card2 = Card.new("Heart", 2)
    @cards = [@card1, @card2]
  end

  def test_check_for_ace
    assert_equal(true, @game1.check_for_ace(@card1))
  end

  def test_highest_card
    assert_equal(@card2, @game1.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 3", @game1.cards_total(@cards) )
  end

end