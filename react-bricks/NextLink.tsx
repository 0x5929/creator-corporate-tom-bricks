import Link from 'next/link'
import { useRouter } from 'next/router'
import { types } from 'react-bricks/frontend'

interface NextLinkProps {
  href: string
  className: string
  activeClassName: string
  isAdmin: boolean
  children: React.ReactNode
}

const NextLink: types.RenderLocalLink = ({
  href,
  className,
  activeClassName,
  isAdmin,
  children,
}: NextLinkProps) => {
  const router = useRouter()

  let anchorClassName = ''

  if (router.asPath === href) {
    anchorClassName = `${className} ${activeClassName}`
  } else {
    anchorClassName = className
  }

  if (isAdmin) {
    return (
      <Link href={href} className={anchorClassName}>
        {children}
      </Link>
    )
  }
  return (
    <Link href={href} className={anchorClassName}>
      {children}
    </Link>
  )
}

export default NextLink
