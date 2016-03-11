import 'whatwg-fetch'
import React from 'react'
import Dropzone from 'react-dropzone'

export default class Import extends React.Component {

    onDrop = files => {
        var data = new FormData()
        data.append('file', files[0])
        fetch('/categories/import', {
            method: 'post',
            body: data
        }).then(res => console.log(res))
    };

    render() {
        let {insert} = this.props
        return (
            <div className='import'>
                <Dropzone onDrop={this.onDrop}>
                    <div>Import a category xls file - drag and drop or click</div>
                </Dropzone>
            </div>
        );
    }
}

