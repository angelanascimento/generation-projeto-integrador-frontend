import { ReactNode, createContext, useState } from "react";

interface AuthContextProps {
    nome: string
    trocarNome: (novoNome: string) => void
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const [nome, setNome] = useState('');

    function trocarNome(novoNome: string) {
        setNome(novoNome)
    }

    return (
        <AuthContext.Provider value={{ nome, trocarNome }}>
            {children}
        </AuthContext.Provider>
    )
}

