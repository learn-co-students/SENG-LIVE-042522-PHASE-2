function ProjectListItem({id, about, image, link, name, phase}) {
  return (
    <li>
      <figure>
        <img src={image} alt={`project: ${name}`} />
      </figure>
      <article>
        <h4>{name}</h4>
        <p>{about}</p>
      </article>
    </li>
  )
}

export default ProjectListItem