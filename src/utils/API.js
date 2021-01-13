import { db, auth } from "../firebase";
const productRef = db.collection("products");

export const getAllProductsFromFirestore = async () => {
  const snapshot = await productRef.get();
  return snapshot.docs.map((doc) => doc.data());
};

export const getPopProductsFromFirestore = async () => {
  const snapshot = await productRef.where("pop", "==", true).get();
  return snapshot.docs.map((doc) => doc.data());
};
