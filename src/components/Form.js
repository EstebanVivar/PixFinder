import React, { useState } from 'react';
import ErrorComponent from './ErrorComponent';


const Form = ({ setSearch }) => {
    const [Keyword, setKeyword] = useState('');
    const [Error, setError] = useState(false)
    const search = e => {
        e.preventDefault();

        if (Keyword.trimEnd() === "") {
            setError(true)
            return;
        }
        setError(false)
        setSearch(Keyword)
    }
    return (
        <form
            onSubmit={search}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search an image, i.e: soccer"
                        onChange={e => setKeyword(e.target.value)}
                    />


                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-dark btn-block"
                        value="Search" />

                </div>
            </div>
            {Error ? <ErrorComponent error="Type a keyword to search" /> : null}
        </form >
    );
}

export default Form;