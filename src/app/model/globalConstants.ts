import { Config } from "./config";
import { Usuario } from "./usuario";

export class GlobalConstant {
    public static usuarioLogado: number
    public static usuarioNomeLogado : string 
    public static usuarioAutenticado: boolean = false
    public static usuarioSelecionado: Usuario
    public static configSelecionada: Config
    public static dominio : string = "@learnhow" 
}