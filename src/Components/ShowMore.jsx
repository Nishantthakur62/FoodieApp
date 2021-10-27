import React from 'react'

const ShowMore = ({num,setNum}) => {
    const showMoreItems=()=>{
        setNum(num+1)
    }
    console.log(num)
    return (
        <button className="showbtn" onClick={showMoreItems}>
            Show More Items
        </button>
    )
}

export default ShowMore
