import React, { useState } from 'react'

const ReadtxtFile = () => {

    const [text, setText] = useState();

    const getData = () => {
        
    }

    React.useEffect(() => {
        
        getData()

        return() => {
            //console.log(text)
        }
    }, [])

    return (
        <div className="container">
            <div className="jumbotron">
                <div class="upload-btn-wrapper">
                    <button class="btn">Upload a file</button>
                    {/* <input type="file" name="myfile" onChange={onChange} /> */}
                </div>
            </div>
            {text && <pre>{text}</pre>}
        </div>


    )
}

export default ReadtxtFile
