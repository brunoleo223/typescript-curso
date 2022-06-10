import { Imprimivel } from "../interfaces/imprimive.js";
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
