import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'solid' | 'ghost'

interface BaseProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = NativeButtonProps | LinkButtonProps

export function Button({ children, variant = 'solid', className, ...props }: ButtonProps) {
  const classes = cn('button', `button-${variant}`, className)

  if ('href' in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props as NativeButtonProps

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  )
}
