import { useEffect } from 'react'
import styles from './TransitionDemo.module.css'

export default function TransitionDemo() {
  // Add View Transitions API support when available
  useEffect(() => {
    if (document.startViewTransition) {
      document.documentElement.classList.add('view-transitions-enabled');
    }
  }, []);

  return (
    <div className={styles.transitionDemo}>
      <h3>View Transitions API Demo</h3>
      <p>
        The View Transitions API requires global styling that doesn't
        fit into the component model. This is crucial for modern, polished UX.
      </p>
      <p>
        When navigating between pages, you should see a smooth fade transition
        if the global styles are working correctly.
      </p>
    </div>
  )
}
