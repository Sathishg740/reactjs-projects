import React from 'react'

function ChildFunc(props) {
    console.log(props.uname);
    return (
        <div>
            <h2>{props.uname}</h2>
        </div>
    )
}

export default React.memo(ChildFunc)
// export default ChildFunc
