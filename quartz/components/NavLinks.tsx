import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from '../types/component'

interface NavLink {
  label: string
  href: string
}

interface NavLinksOptions {
  links: NavLink[]
}

export default ((opts?: NavLinksOptions) => {
  const links = opts?.links ?? []

  const NavLinks: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <nav class="nav-links">
        {links.map(({ label, href }) => (
          <a href={href} class="nav-link">
            {label}
          </a>
        ))}
      </nav>
    )
  }

  NavLinks.css = `
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.nav-link {
  font-size: 0.85rem;
  color: var(--darkgray);
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.15s ease;
  background: none !important;
  border: none !important;
  padding: 0 !important;
}

.nav-link:hover {
  opacity: 1;
  color: var(--dark);
}
`

  return NavLinks
}) satisfies QuartzComponentConstructor
