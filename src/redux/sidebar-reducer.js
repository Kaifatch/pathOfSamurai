let initialState = {
  friends: [
    {
      id: 1,
      name: "Andrew",
      avatar: "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png"
    },
    {
      id: 2,
      name: "Sasha",
      avatar: "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png"
    },
    {
      id: 3,
      name: "Sveta",
      avatar: "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png"
    },
  ]
}

const sidebarReducer = (state = initialState, action) => {

  switch (action.type) {
    default:
      return state;
  }
}

export default sidebarReducer;