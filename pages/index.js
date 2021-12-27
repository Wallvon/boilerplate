import Head from "next/head";
import Footer from "../components/footer";

export default function Home() {
  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <title>Under Construction</title>
          <meta name="description" content="Please check back later." />
          <meta name="author" content="Robert Stokreef" />
          <link rel="icon" href="https://robert-s.dev/favicon.ico" />
        </Head>
          <div className="flex flex-col min-h-screen">
            <div className="flex flex-grow items-center">
              <div className="w-full">
                <div className="container flex mx-auto justify-center">
                    <div>
                        <h1 className="md:text-6xl text-3xl font-bold">
                          Under <span className="text-rose-500">construction</span>
                        </h1>
                        <p className="text-gray-200 text-lg font-medium">
                          Please check back later.
                        </p>
                    </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
      </>
  )
}
