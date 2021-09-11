import { Usuario } from "./usuario";

export class GlobalConstant {
    public static usuarioLogado: number
    public static usuarioNomeLogado : string 
    public static usuarioAutenticado: boolean = false
    public static usuarioSelecionado: Usuario
    public static dominio = "@fatec.com" 
}