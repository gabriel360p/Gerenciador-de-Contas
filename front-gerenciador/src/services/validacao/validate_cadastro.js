
export function validate_cadastro(data) {
    if (data.email.trim() === '') {
        alert("Todos os campos precisam ser preenchidos")
        return false
    } else if (data.nome.trim() === '') {
        alert("Todos os campos precisam ser preenchidos")
        return false
    } else if (data.password.trim() === '') {
        alert("Todos os campos precisam ser preenchidos")
        return false
    } else if (data.password_confirmation.trim() === '') {
        alert("Todos os campos precisam ser preenchidos")
        return false
    }

    if (data.password != data.password_confirmation) {
        alert('As senhas precisam ser iguais!')
        return false
    }

    if (data.password.length < 8 || data.password_confirmation.length < 8) {
        alert('As senhas precisam ser ter 8 dígitos!')
        return false
    }

    return true
}


