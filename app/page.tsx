import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
      // <Home/>
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
          
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      {/* <Hero/> */}
    <Footer/>
    </div>
  );
}

// pages/index.js

import Head from 'next/head';

export function Home() {
  'use client';
  return (
    <div>
      <Head>
        <title>Property Management App</title>
        <meta name="description" content="Manage your properties efficiently with our app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <header className="w-full text-center py-6 bg-blue-600 text-white">
          <h1 className="text-4xl font-bold">Property Management App</h1>
          <p className="mt-2 text-lg">Efficiently manage your properties with ease</p>
        </header>

        <section className="flex flex-col items-center justify-center w-full max-w-4xl px-4 py-10">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Property Listings</h3>
              <p>List and manage all your properties in one place.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Tenant Management</h3>
              <p>Efficiently manage tenant details and lease agreements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Reports & Analytics</h3>
              <p>Get insights into property performance and finances.</p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl px-4 py-10 bg-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">Sign up today to start managing your properties more efficiently.</p>
          <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">Sign Up</a>
        </section>

        <footer className="w-full text-center py-6 bg-gray-800 text-white">
          <p>&copy; 2024 Property Management App. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
