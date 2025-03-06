import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

export function createToken(user: { id: string; email: string }) {
  return jwt.sign(user, SECRET_KEY, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch {
    return null;
  }
}

export function setAuthCookie(token: string) {
  cookies().set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });
}

export function getAuthUser() {
  const token = cookies().get("auth_token")?.value;
  return token ? verifyToken(token) : null;
}

export function logout() {
  cookies().set("auth_token", "", { maxAge: 0 });
}
