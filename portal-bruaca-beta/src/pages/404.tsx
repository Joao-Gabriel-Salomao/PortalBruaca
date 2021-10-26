import React from 'react'

import PageNotFound from '../components/PageNoutFound/index'
// import Seo from '@/components/Seo'

export default function Error404Page(props) {
    return (
        <>
            {/* <Seo  metaTags={{title: '404', shouldIndexPage: false}}/> */}
            <PageNotFound />
        </>
    )
}
