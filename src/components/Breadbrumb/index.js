import React from 'react'

const Breadcrumb = props => {
  const { pathname } = window.location
  const paths = pathname.split('/').filter(v => v)
  return <nav className="breadcrumb px-4 md:px-6 lg:px-8 py-2">
    <ol>
      <li><a href="/"><i class="fas fa-home text-indigo-500"></i></a></li>
      {paths.map((path, i) => <li><a href={`/${paths.filter((p, index) => index <= i).join('/')}`}>{path}</a></li>)}
    </ol>
  </nav>
}

export default Breadcrumb;
