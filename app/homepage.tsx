import React from 'react'
import Navbar from './Navbar'

const categories = [
    {
        id: 1,
        name: "חטיפות",
        image: ""
    },
    {
        id: 2,
        name: "מסיבת הטבע",
        image: ""
    },
	{
		id: 3,
		name: "חיילים",
		image: ""
	}
]

const Grid = () => {
    return (
        <div className='categories'>
            {categories.map((category) => {
                return (
                    <a className='category' key={category.id}>
						<img src={category.image} alt=''></img>
                        <p className='category-title'>{category.name}</p>

                    </a>
                )
            })}
        </div>
    )
}

const Homepage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Grid></Grid>
        </>
    );
}

export default Homepage;