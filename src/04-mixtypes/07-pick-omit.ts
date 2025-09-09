type Names = Record<string, number>;
type Brands = "apple" | "lenovo" | "hp" | "dell" | "microsoft";
type BrandNames = Record<Brands, number>;
// const MyBrands: BrandNames = {
// }

interface Todo {
  id: string;
  title: string;
  desc: string;
  completed: boolean;
  createdAt: number;
}

type SimpleTodo = Pick<Todo, "id" | "title" | "completed">;
const todo1: SimpleTodo = {
  id: "sad",
  title: "asd",
  completed: false,
};

type SimpleTodo2 = Omit<Todo, "desc" | "createdAt">;
