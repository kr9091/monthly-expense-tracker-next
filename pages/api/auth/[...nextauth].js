import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user',
    }),
  ],
  // database: process.env.NEXT_PUBLIC_DB_URL,
  secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
  session: {
    jwt: true,
  },
  // jwt: {
  //   secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
  //   encryption: true,
  // },
  theme: 'light',
});
