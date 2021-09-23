import Link from 'next/link';

const PortfolioPage = () => {
  const projects = [
    {id: 'robinhood', name: 'Robinhood'},
    {id: 'photography', name: 'Photofy'},
    {id: 'nodolla', name: 'NoDolla'}
  ]

  return (
    <div>
      <h1>Portfolio Page</h1>
      <ul>
        {projects.map(project => (
        <li key={project.id}>
          <Link href={`/portfolio/${project.id}`}>{project.name}</Link>
        </li>))}
      </ul>
    </div>
  )
}

export default PortfolioPage;