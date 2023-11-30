export function validate_login(data) {
    if (data.email.trim() === '') {
        alert("Todos os campos precisam ser preenchidos")
        return false
    } else if (data.password.trim() === '') {
        alert("Todos os campos precisam ser preenchidos")
        return false
    } 

    return true
}