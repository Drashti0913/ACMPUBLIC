import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Team from '../components/Team';
// import Timer from '../components/CountdownTimer';
import Footer from '../components/Footer';
import Head from 'next/head';
import CountdownTimer from '../components/CountdownTimer';

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Head>
        <title>Countdown Timer</title>
      </Head>
      <Header />
      <Hero />
      <Feature/>
      <Service />
      <About />
      <Team />
      <center>
        <h1>5</h1>
        <h1>September</h1> <br/>
        <h3>"Mark Your Calendars!"</h3></center>
           
      <CountdownTimer/>
      <Footer />
    </Layout>
  );
}

export default Index;
