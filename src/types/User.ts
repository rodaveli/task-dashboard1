```typescript
export interface User {
  id: string;
  email: string;
  streak: number;
  points: number;
}

export interface AuthUser {
  uid: string;
  email: string;
}
```