
const closeDrawer = ()=> {
    const cartDrawer = document.getElementById('cartDrawer')
    const drawerButton = document.getElementById('closeDrawer')
    const addToCartButton = document.getElementById('addToCart')
    const containerDrawer = document.querySelector(".drawerContainer")

    if (cartDrawer.style.display ="flex") {
    document.addEventListener('click', (event) => {
        const withinBoundaries = event.composedPath().includes(cartDrawer)
        const withinBoundariesButton = event.composedPath().includes(addToCartButton)
        if (!withinBoundaries||withinBoundariesButton) {
            cartDrawer.style.display = 'none'
            
        }})}

    if (containerDrawer.style.display ="flex") {
            document.addEventListener('click', (event) => {
                const withinBoundaries = event.composedPath().includes(cartDrawer)
                if (!withinBoundaries) {
                    containerDrawer.style.display = 'none'        
                }})}

    drawerButton.addEventListener('click', () => {
            cartDrawer.style.display='none'
            containerDrawer.style.display="none"
    })

    document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
        cartDrawer.style.display = 'none'
        containerDrawer.style.display="none"
    }
    })
    }

export default closeDrawer