import { Aprendizagem } from "./aprendizagem";
import { BaseConhecimento } from "./base-conhecimento";
import { Config } from "./config";
import { Usuario } from "./usuario";

export class GlobalConstant {
        
    public static usuarioSelecionado: Usuario

    public static configSelecionada: Config
    public static dominio : string = "@learnhow" 

    public static processoBaseConhecimento: string
    public static etapaBaseConhecimento: string
    public static vigenciaBaseConhecimento: string
    public static baseConhecimentoSelecionada: BaseConhecimento
    public static baseConhecimentoEditar: boolean

    public static aprendizagemSelecionada: Aprendizagem

}