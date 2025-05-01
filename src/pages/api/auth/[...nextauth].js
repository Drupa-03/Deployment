import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions={
    providers: [
        GithubProvider({
            clientId:'Ov23li0cKePt6S7Hsigf',
            clientSecret:'dd69d86e608cddd477b9ca56dacd391283655d32'
        }),
    ],
};

export default NextAuth(authOptions);