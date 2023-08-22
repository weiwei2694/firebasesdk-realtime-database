import app from "@/config/firebase";
import { getDatabase } from "firebase/database";

const db = getDatabase(app);

export { db };
