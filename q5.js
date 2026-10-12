function validateSignup(body) {
  const errors = [];
  if (!body || typeof body !== "object") errors.push("Request body is missing");
  if (typeof body?.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) errors.push("Invalid email");
  if (typeof body?.password !== "string" || body.password.length < 8) errors.push("Password must be at least 8 characters");
  return errors;
}
console.log(validateSignup({ email: "bad-email", password: "123" }));
console.log(validateSignup(null));
