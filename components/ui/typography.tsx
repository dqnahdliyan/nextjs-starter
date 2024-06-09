import React from 'react'

export const H1 = ({ children }: { children: React.ReactNode }) => (
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {children}
    </h1>
)

export const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        {children}
    </h2>
)

export const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        {children}
    </h3>
)

export const H4 = ({ children }: { children: React.ReactNode }) => (
    <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
        {children}
    </h4>
)

export const H5 = ({ children }: { children: React.ReactNode }) => (
    <h5 className='scroll-m-20 text-lg font-semibold tracking-tight'>
        {children}
    </h5>
)

export const H6 = ({ children }: { children: React.ReactNode }) => (
    <h6 className='scroll-m-20 text-base font-semibold tracking-tight'>
        {children}
    </h6>
)

export const P = ({ children }: { children: React.ReactNode }) => (
    <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>
)

export const Blockquote = ({ children }: { children: React.ReactNode }) => (
    <blockquote className='mt-6 border-l-2 pl-6 italic'>{children}</blockquote>
)

export const CodeInline = ({ children }: { children: React.ReactNode }) => (
    <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
        {children}
    </code>
)

export const CodeBlock = ({ children }: { children: React.ReactNode }) => (
    <pre className='mt-4 rounded-lg border p-4 font-mono text-sm'>
        <code className='font-mono'>{children}</code>
    </pre>
)

export const Lead = ({ children }: { children: React.ReactNode }) => (
    <p className='text-xl text-muted-foreground'>{children}</p>
)
