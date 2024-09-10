import SideBarcontext from "@/contexts/SideBarContext";
import Userscontext from "@/contexts/UsersContext";
import { redirect } from "next/dist/server/api-utils";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Healthsecure application",
  description: "A Saas applicaion to implement roboust authentication and authorization for healthcare institutions",
};

export default function RootLayout({ children }) {
   const hostHeader = headers().get('host');
   const domainParts = hostHeader.split('.');
   const hasSubdomain = domainParts.length > 2;
  
   if(hasSubdomain){
    redirect('/institutions/login')
   }
  

  return (
    <Userscontext>
      <SideBarcontext>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </SideBarcontext>
    </Userscontext>
  );
}
