window.addEventListener('DOMContentLoaded', () => {
    verifyAuth()
})

async function getComponent(url){
    const response = await fetch(url)
    return await response.text()
}

async function verifyAuth() {
    const auth = 1
    const body = document.getElementById('body-content')
    if (auth === 1) {
        body.innerHTML = await getComponent('./pages/login/login.html')
    }
    else {
        if (auth === 2) {
            body.innerHTML = await getComponent('./components/login/login.html')
            
        }if (auth === 3) {
            body.innerHTML = await getComponent('./components/login/login.html')
            
        }
    }
}