'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { track, type TrackingEvent } from '@/lib/tracking'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: TrackingEvent
  eventParams?: Record<string, string | number | boolean>
  children: ReactNode
}

export function TrackedLink({ eventName, eventParams = {}, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track(eventName, {
          link_url: props.href || '',
          link_text: typeof children === 'string' ? children : props['aria-label'] || '',
          page_path: window.location.pathname,
          ...eventParams
        })
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
