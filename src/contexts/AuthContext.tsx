import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0n,
        name: "",
        email: "",
        password: "",
        url: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/users/login`, userLogin, setUsuario)
            toastAlerta('Usuário logado com sucesso', "sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta('Dados do usuário inconsistentes', "erro")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0n,
            name: "",
            email: "",
            password: "",
            url: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
