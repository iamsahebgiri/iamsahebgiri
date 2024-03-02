export interface RaindropResponse {
    result: boolean
    items: Item[]
    count: number
    collectionId: number
  }
  
  export interface Item {
    _id: number
    link: string
    title: string
    excerpt: string
    note: string
    type: string
    user: User
    cover: string
    media: any[]
    tags: any[]
    important: boolean
    reminder: Reminder
    removed: boolean
    created: string
    lastUpdate: string
    collection: Collection
    highlights: any[]
    domain: string
    creatorRef: CreatorRef
    sort: number
    collectionId: number
  }
  
  export interface User {
    $ref: string
    $id: number
  }
  
  export interface Reminder {
    date: any
  }
  
  export interface Collection {
    $ref: string
    $id: number
    oid: number
  }
  
  export interface CreatorRef {
    _id: number
    avatar: string
    name: string
    email: string
  }
  