
export default async function Home() {
  const styleObj = { 'backgroundImage': 'url(/photo-1507358522600-9f71e620c44e.jpg)'};
  return (
    <main>
    <div className="hero min-h-screen" style={styleObj}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">This page is still under constuction...</p>
        </div>
      </div>
    </div>
    </main>
  )
}
