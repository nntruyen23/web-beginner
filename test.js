const url = 'https://68babe0884055bce63f002bd.mockapi.io/aiaivn'
async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

x = getData()

