/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SubmissionImport } from './routes/submission'
import { Route as LeaderboardImport } from './routes/leaderboard'
import { Route as CollectionImport } from './routes/collection'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileUserIdImport } from './routes/profile.$userId'
import { Route as CollectionUserIdPoemIdImport } from './routes/collection.$userId.$poemId'

// Create/Update Routes

const SubmissionRoute = SubmissionImport.update({
  id: '/submission',
  path: '/submission',
  getParentRoute: () => rootRoute,
} as any)

const LeaderboardRoute = LeaderboardImport.update({
  id: '/leaderboard',
  path: '/leaderboard',
  getParentRoute: () => rootRoute,
} as any)

const CollectionRoute = CollectionImport.update({
  id: '/collection',
  path: '/collection',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileUserIdRoute = ProfileUserIdImport.update({
  id: '/profile/$userId',
  path: '/profile/$userId',
  getParentRoute: () => rootRoute,
} as any)

const CollectionUserIdPoemIdRoute = CollectionUserIdPoemIdImport.update({
  id: '/$userId/$poemId',
  path: '/$userId/$poemId',
  getParentRoute: () => CollectionRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/collection': {
      id: '/collection'
      path: '/collection'
      fullPath: '/collection'
      preLoaderRoute: typeof CollectionImport
      parentRoute: typeof rootRoute
    }
    '/leaderboard': {
      id: '/leaderboard'
      path: '/leaderboard'
      fullPath: '/leaderboard'
      preLoaderRoute: typeof LeaderboardImport
      parentRoute: typeof rootRoute
    }
    '/submission': {
      id: '/submission'
      path: '/submission'
      fullPath: '/submission'
      preLoaderRoute: typeof SubmissionImport
      parentRoute: typeof rootRoute
    }
    '/profile/$userId': {
      id: '/profile/$userId'
      path: '/profile/$userId'
      fullPath: '/profile/$userId'
      preLoaderRoute: typeof ProfileUserIdImport
      parentRoute: typeof rootRoute
    }
    '/collection/$userId/$poemId': {
      id: '/collection/$userId/$poemId'
      path: '/$userId/$poemId'
      fullPath: '/collection/$userId/$poemId'
      preLoaderRoute: typeof CollectionUserIdPoemIdImport
      parentRoute: typeof CollectionImport
    }
  }
}

// Create and export the route tree

interface CollectionRouteChildren {
  CollectionUserIdPoemIdRoute: typeof CollectionUserIdPoemIdRoute
}

const CollectionRouteChildren: CollectionRouteChildren = {
  CollectionUserIdPoemIdRoute: CollectionUserIdPoemIdRoute,
}

const CollectionRouteWithChildren = CollectionRoute._addFileChildren(
  CollectionRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/collection': typeof CollectionRouteWithChildren
  '/leaderboard': typeof LeaderboardRoute
  '/submission': typeof SubmissionRoute
  '/profile/$userId': typeof ProfileUserIdRoute
  '/collection/$userId/$poemId': typeof CollectionUserIdPoemIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/collection': typeof CollectionRouteWithChildren
  '/leaderboard': typeof LeaderboardRoute
  '/submission': typeof SubmissionRoute
  '/profile/$userId': typeof ProfileUserIdRoute
  '/collection/$userId/$poemId': typeof CollectionUserIdPoemIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/collection': typeof CollectionRouteWithChildren
  '/leaderboard': typeof LeaderboardRoute
  '/submission': typeof SubmissionRoute
  '/profile/$userId': typeof ProfileUserIdRoute
  '/collection/$userId/$poemId': typeof CollectionUserIdPoemIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/collection'
    | '/leaderboard'
    | '/submission'
    | '/profile/$userId'
    | '/collection/$userId/$poemId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/collection'
    | '/leaderboard'
    | '/submission'
    | '/profile/$userId'
    | '/collection/$userId/$poemId'
  id:
    | '__root__'
    | '/'
    | '/collection'
    | '/leaderboard'
    | '/submission'
    | '/profile/$userId'
    | '/collection/$userId/$poemId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CollectionRoute: typeof CollectionRouteWithChildren
  LeaderboardRoute: typeof LeaderboardRoute
  SubmissionRoute: typeof SubmissionRoute
  ProfileUserIdRoute: typeof ProfileUserIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CollectionRoute: CollectionRouteWithChildren,
  LeaderboardRoute: LeaderboardRoute,
  SubmissionRoute: SubmissionRoute,
  ProfileUserIdRoute: ProfileUserIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/collection",
        "/leaderboard",
        "/submission",
        "/profile/$userId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/collection": {
      "filePath": "collection.tsx",
      "children": [
        "/collection/$userId/$poemId"
      ]
    },
    "/leaderboard": {
      "filePath": "leaderboard.tsx"
    },
    "/submission": {
      "filePath": "submission.tsx"
    },
    "/profile/$userId": {
      "filePath": "profile.$userId.tsx"
    },
    "/collection/$userId/$poemId": {
      "filePath": "collection.$userId.$poemId.tsx",
      "parent": "/collection"
    }
  }
}
ROUTE_MANIFEST_END */
