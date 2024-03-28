window.addEventListener('DOMContentLoaded', () => {
    verifyAuth()
})

async function getComponent(url){
    const response = await fetch(url)
    return await response.text()
}

async function verifyAuth() {
    if (1 === 1) {
        const body = document.getElementById('body-content')
        body.innerHTML = await getComponent('./components/login/login.html')
    }
}