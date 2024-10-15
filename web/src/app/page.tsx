import Head from 'next/head';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Web Wave Studios</title>
        <meta name="description" content="Welcome to Web Wave Studios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Web Wave Studios</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-700 hover:text-primary">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary">Services</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary">Portfolio</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-20 px-6">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-secondary mb-4">Welcome to Web Wave Studios</h2>
          <p className="text-lg text-gray-700 mb-8">
            We create stunning websites and digital experiences that help your business grow.
          </p>
          <a href="#" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition">
            Learn More
          </a>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Web Wave Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;