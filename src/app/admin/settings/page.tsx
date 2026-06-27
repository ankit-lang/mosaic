import React from "react";
import { getUsers, createUser } from "@/app/actions";

export default async function SettingsPage() {
  const users = await getUsers();

  return (
    <div className="p-8 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Add User</h2>
          <form action={createUser} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-md p-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-md p-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Create User
            </button>
          </form>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Current Users</h2>
          {users.length === 0 ? (
            <p className="text-neutral-500">No users found in database.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {users.map((user) => (
                <li key={user.id} className="flex flex-col p-3 rounded-md bg-neutral-950 border border-neutral-800">
                  <span className="font-medium text-white">{user.name}</span>
                  <span className="text-sm text-neutral-400">{user.email}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
