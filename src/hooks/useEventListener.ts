'use client'

import React from 'react'

type EventListenerCallback<T extends HTMLElement | Window> = (
	event: Event
) => void

function useEventListener<K extends keyof WindowEventMap>(
	eventType: K,
	callback: EventListenerCallback<Window>,
	element?: Window | Document
): void

function useEventListener<
	K extends keyof HTMLElementEventMap,
	T extends HTMLElement = HTMLDivElement
>(
	eventType: K,
	callback: EventListenerCallback<T>,
	element?: React.RefObject<T>
): void

function useEventListener<
	KW extends keyof WindowEventMap,
	KE extends keyof HTMLElementEventMap,
	T extends HTMLElement | Window = Window
>(
	eventType: KW | KE,
	callback: EventListenerCallback<T>,
	element?: React.RefObject<T> | Window | Document
): void {
	const callbackRef = React.useRef<EventListenerCallback<T>>()

	React.useEffect(() => {
		callbackRef.current = callback
	})

	React.useEffect(() => {
		const el = element || window
		const targetElement = (
			el instanceof Window || el instanceof Document ? el : el.current
		) as T

		if (!targetElement) return

		const eventListener: EventListenerOrEventListenerObject = (
			event: Event
		) => {
			callbackRef.current?.(event)
		}

		targetElement.addEventListener(eventType, eventListener)

		return () => {
			targetElement.removeEventListener(eventType, eventListener)
		}
	}, [eventType, element])
}

export default useEventListener
