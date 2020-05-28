function addNewCard(board, newCard) {
  board.columns
    .find((col) => col.id === newCard.columnId)
    .cards
    .push(newCard);
  return board;
}

function deleteCard(board, card) {
  const { cards } = board.columns
    .find((col) => col.id === card.columnId);
  cards.splice(cards.indexOf(card), 1);
  return board;
}

module.exports = { addNewCard, deleteCard };
