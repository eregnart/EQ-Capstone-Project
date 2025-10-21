export const UserModel = {
key(email) { return `user:${String(email||"").toLowerCase()}`; },
getUser(storage, email) { return storage.load(UserModel.key(email)); },
saveUser(storage, user){
const u = { role: user.role || "contractor", ...user, email: String(user.email||"").toLowerCase() };
storage.save(UserModel.key(u.email), u); return u;
},
getAll(storage){
const out=[]; for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(k?.startsWith("user:")){ const v=storage.load(k); if(v) out.push(v);} }
return out;
},
setRole(storage, email, role){ const u=UserModel.getUser(storage,email); if(!u) throw new Error("User not found"); u.role=role; return UserModel.saveUser(storage,u); }
};