import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Paginate({ pages, page }) {
    return (
        pages > 1 && (<>
            <div className="paginate">
                {[...Array(pages).keys()].map(x => {
                    return <Link to={`/page/${x + 1}`} className={x + 1 === page?'active':''}>
                        {x + 1}
                    </Link>

                })}
            </div>
        </>)
    )
}

export default Paginate
