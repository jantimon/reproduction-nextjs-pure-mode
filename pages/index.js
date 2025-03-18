import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>CSS Modules Global Styling Reproduction</h1>
      
      <h2>View Transitions Demo</h2>
      <p>
        Click <Link href="/transitions">here</Link> to navigate to another page. 
        The transition animation should be smooth if the global CSS is working properly.
      </p>
      
      <h2>Problem Explanation</h2>
      <p>
        With standard CSS Modules, these global styles are scoped to their components.
        The `cssmodules-pure-no-check` directive would allow us to escape this scoping
        for legitimate use cases like these.
      </p>
    </div>
  )
}
