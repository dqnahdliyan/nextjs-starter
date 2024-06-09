'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

const Collapsible = (props: CollapsiblePrimitive.CollapsibleProps) => (
    <CollapsiblePrimitive.Root {...props} />
)

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

Collapsible.Trigger = CollapsibleTrigger
Collapsible.Content = CollapsibleContent

export { Collapsible }
