import { Comparavel } from "./comparavel";
import { Imprimivel } from "./imprimive";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}