function addNewCard(board, newCard) {
  board.columns
    .find((col) => col.id === newCard.columnId)
    .cards
    .push(newCard);
  return board;
}

module.exports = { addNewCard };
