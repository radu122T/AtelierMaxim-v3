import React from 'react'

const Header = ()=> {

    return (
        <header className='headerhomeScreen'> 
			<section className="firstSection">
				<img src="https://res.cloudinary.com/radu122/image/upload/v1657029586/ateliermaxim/HeaderPic2_waypwl.png" alt=""/>
			</section>
			<section className="secondSection">
				<h1>Decoratiuni <br/> din lemn</h1>
				<div className='veziProdusele'><a href="#inter"><span className='veziProduseleSpan'>Vezi produsele</span></a></div>
			</section>
			<section className="lastSection">
				<a href="#inter">Exploreaza <i className="fa-solid fa-arrow-down-long"></i></a>
			</section>

		</header>
    )
}

export default Header

// <CloudinaryContext cloudName="dop53mjlx">
// <div>
//     <Image publicId="sample" width="50" />
// </div>
// <Image publicId="sample" width="0.5" />
// </CloudinaryContext>