import { Header }  from "./header";
import Blogpost  from "./posts";
import { Footer }  from "./footer";


export default async function Home() {

  return (
    <main>
      <Header/>
      {/* @ts-expect-error Async Server Component */}
      <Blogpost/>
      <Footer/>
    </main>
  )
}
