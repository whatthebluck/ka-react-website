import Link from 'next/link'
import themes from '../config/themes'

import Page from "../HOC/Page";

export default Page(() => {
  return (
    <div>
      <ul>
        {
          themes.map(theme =>
            <li key={theme.name.toLowerCase()}>
              <h2><Link href={`/theme?id=${theme.id}`} as={`/themes/${theme.id}`} prefetch><a>{theme.name}</a></Link></h2>
              <p>{theme.excerpt}</p>
              <p>${(theme.price / 100)}</p>
            </li>
          )
        }
      </ul>
    </div>
  )
})