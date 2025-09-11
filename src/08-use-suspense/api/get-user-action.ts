
export interface user {
    id:       number
    name:     string
    location: string
    role:     string
}

export const getUserAction = async(id: number) => {
    await new Promise(res => setTimeout(res, 2000))

    return {

        id: id,
        name: 'Gibran Flores',
        location: 'Edomex Mexico',
        role: 'Estudiante de software',
    }
        
    
}