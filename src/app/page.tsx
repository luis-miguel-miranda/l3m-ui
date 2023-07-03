import RootLayout from "./layout";

export default async function Page() {

  return (
    <RootLayout>
    <div className="hero min-h-screen" >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">This page is still under constuction...</p>
          
        </div>
      </div>
    </div>
    </RootLayout>
  )
}
