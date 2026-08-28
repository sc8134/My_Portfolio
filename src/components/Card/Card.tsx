import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface CardProps {
  title: string
  children: ReactNode
  className?: string
  footer?: ReactNode
}

export function Card({ title, children, className, footer }: CardProps) {
  return (
    <article className={cn('card', className)}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>
      {footer ? <div className="card-footer">{footer}</div> : null}
    </article>
  )
}
