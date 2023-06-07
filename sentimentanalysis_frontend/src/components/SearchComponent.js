import './SearchCSS.css'
import { Input } from 'reactstrap'

function Search() {

    return (
        <div className="container ">
            <div className='row '>
                <div className='mt-5 offset-5'>
                    <p className='txt'>Enter tweet to search</p>
                </div>
                <div className='row justify-content-center'>
                    <div className=' col-4'>
                        <Input type="text" id="tweet" name="tweet" placeholder="Tweet..." />
                    </div>
                    <button className="btn bttn col-1">
                            Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search