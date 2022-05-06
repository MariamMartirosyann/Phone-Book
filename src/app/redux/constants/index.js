import { nanoid } from "nanoid";

export const defaultContactList = [
  {
    id: nanoid(),
    name: "John Doe",
    email: [{ id: nanoid(), value: "k@mail.ru" }],
    number: [{ id: nanoid(), value: "2222222222" }],
  },
  {
    id: nanoid(),
    name: "Johna Smitgh",
    email: [{ id: nanoid(), value: "Johna@mail.ru" }],
    number: [{ id: nanoid(), value: "1111111111" }],
  },
];
