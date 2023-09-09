import { User } from "./user";
import { Editor } from "./editor";

interface Admin extends User, Editor {
  addUser(): string;
}
