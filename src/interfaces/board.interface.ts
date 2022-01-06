interface IBoard {
  id?: string;
  title: string;
  columns: { id: string; title: string; order: number }[];
}

export { IBoard };
