const ListItems = [
  {
    type: "listItem",
    id: "i-1",
    name: "First Item",
  },
  {
    type: "listItem",
    id: "i-2",
    name: "Second Item",
  },
  {
    type: "listItem",
    id: "i-3",
    name: "Third Item",
  },
];

const List = [
  {
    type: "listItem",
    id: "i-4",
    name: "Fourth Item",
  },
  {
    type: "listItem",
    id: "i-5",
    name: "Fifth Item",
  },
  {
    type: "subList",
    id: "sl-1",
    name: "Sub List 1",
    sublist: [
      {
        type: "listItem",
        id: "i-6",
        name: "Sixth Item",
      },
    ],
  },
];

export { ListItems, List };
