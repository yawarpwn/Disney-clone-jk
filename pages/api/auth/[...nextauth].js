import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { db } from 'lib/firebase'
import * as firestoreFunctions from 'firebase/firestore' 
// import {
//   getFirestore,
//   collection,
//   query,
//   getDocs,
//   where,
//   limit,
//   doc,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   runTransaction,
// } from 'firebase/firestore'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
    // ...add more providers here
  ],
  adapter: FirebaseAdapter({db, ...firestoreFunctions})
})
