export default function validateEmail(email) {
    let re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    return re.test(email)
}