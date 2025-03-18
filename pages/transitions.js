import Link from 'next/link'
import TransitionDemo from '../components/TransitionDemo/TransitionDemo'

export default function Transitions() {
  return (
    <div>
      <h1>Transitions Page</h1>
      <p>
        You should have seen a fade transition when navigating to this page.
        If not, the global CSS for view transitions is not working.
      </p>
      
      <TransitionDemo />
      
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  )
}
