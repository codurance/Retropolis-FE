function addNewCard(board, newCard) {
  return {
    columns: [
      {
        id: 1,
        title: 'Start',
        cards: [
          {
            id: 1,
            columnId: 1,
            text: 'hello'
          },
          {
            id: 2,
            columnId: 1,
            text: 'hello again'
          }
        ]
      }
    ]
  };
}

module.exports = { addNewCard };
