# Firebase SDK | Realtime Database

## Package Setup
1. Install the packages
```
npm install firebase
```
2. Add env variables
```js
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=1:
```
3. Create `config/firebase.ts`
```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;
```
4. Create `lib/db.ts`
```js
import app from "@/config/firebase";
import { getDatabase } from "firebase/database";

const db = getDatabase(app);

export { db };
```

## Realtime Database Documentation
- [Realtime Database](https://firebase.google.com/docs/database/web/start?hl=id)
- [Write](https://firebase.google.com/docs/database/web/read-and-write?hl=id#write_data)
- [Read](https://firebase.google.com/docs/database/web/read-and-write?hl=id#read_data)
- [Delete](https://firebase.google.com/docs/database/web/read-and-write?hl=id#delete_data)