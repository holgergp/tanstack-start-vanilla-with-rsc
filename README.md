# TanStack Start with React Server Components

[![Netlify Status](https://api.netlify.com/api/v1/badges/deploy-status/tanstack-start-rsc)](https://tanstack-start-rsc.netlify.app/)

**Live demo:** [tanstack-start-rsc.netlify.app](https://tanstack-start-rsc.netlify.app/)

Exploring different RSC patterns with [TanStack Start](https://tanstack.com/start). This project tests how server components can be used alongside client components, using different composition and data-fetching strategies.

## Scenarios

### 1. Server Component via Loader (`/serverComponent`)

A server component rendered with `renderServerComponent()` and loaded through TanStack Router's `loader`. The server-rendered HTML is fetched as part of route data and rendered directly on the client.

### 2. Composite Server Component (`/compositeComponent`)

Uses `createCompositeComponent()` to build a server component that accepts client-side children and component props. This demonstrates the "slots" pattern where the server defines the layout and the client fills in interactive pieces.

### 3. Server Component via TanStack Query (`/componentByQuery`)

Streams a server component using `renderToReadableStream()` and consumes it on the client with `createFromReadableStream()` inside a TanStack Query `queryFn`. This shows RSC working outside of router loaders.

## Visual Indicators

- **Red dashed border** = server-rendered component
- **Blue dashed border** = client-rendered component

## Next.js vs TanStack Start: Different takes on RSC

Next.js App Router and TanStack Start both support React Server Components, but their philosophies differ significantly.

### SSR vs RSC — an important distinction

Both frameworks do **SSR by default**: the server renders the full page HTML, sends it to the browser, and React hydrates it. In that sense, both are server-first for *rendering*.

The difference is in **component architecture**. RSC is not SSR — it's a separate mechanism where certain components *only* execute on the server and stream their output to the client as data, without ever being part of the client bundle.

- **Next.js** is server-first for both rendering (SSR) and component architecture (RSC). Components are server components by default; you opt into client interactivity with `"use client"`.
- **TanStack Start** is server-first for rendering (SSR) but **client-first for component architecture**. Your component tree lives on the client. Server components are an opt-in pattern you pull in when useful — not the default you escape from.

When TanStack describes itself as "isomorphic-first", it refers to this component-level flexibility: the framework doesn't force you onto one side. SSR still happens on the server either way.

### Composition

In Next.js, the server determines the component tree and marks client boundaries with `"use client"`. The framework controls where RSCs are created and how UI recomposes.

TanStack Start inverts this with **Composite Components**: the server defines a layout with open slots (`children`, render props), and the client decides what fills them. The client owns the tree.

### Data flow

Next.js bakes RSC data flow into framework conventions — server components are tightly coupled to the rendering pipeline.

In TanStack Start, RSCs are just React Flight streams — like any other piece of server data. You fetch them through router loaders, TanStack Query, or any async pattern you prefer. This project demonstrates all three approaches.

### Server actions

Next.js uses `"use server"` directives to expose server actions with implicit network boundaries.

TanStack Start rejects `"use server"` actions, citing security concerns around implicit network boundaries. Instead it requires explicit RPCs via `createServerFn()` with hardened serialization and validation.

## Getting Started

```bash
npm install
npm run dev
```

## Resources

- [React Server Components Your Way](https://tanstack.com/blog/react-server-components) - Blog post on TanStack's approach to RSC
- [Server Components Guide](https://tanstack.com/start/latest/docs/framework/react/guide/server-components) - Official TanStack Start RSC documentation
- [RSC Example](https://tanstack.com/start/latest/docs/framework/react/examples/start-basic-rsc) - Official basic RSC example