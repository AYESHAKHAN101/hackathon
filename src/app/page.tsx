import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection-1";
 import Image from "next/image";
import ProductShowcase from "@/components/productShowcase";
import TopPicks from "@/components/TopPicks";
import NewArrivals from "@/newarrival";
import BlogSection from "@/ourblogs";
import InstagramSection from "@/InstagramSection"
import Footer from "@/components/footer";
import Shopbar from "@/components/header";
import ShopHero from "@/components/shop/shopHero";
import FilterSortBar from "@/components/shop/FilterSortBar";
import ProductGrid from "@/components/shop/ProductGrid";
import FeaturesSection from "@/components/shop/FeaturesSection";
import Breadcrumb from "@/components/singleProducts/Breadcrumb";
import ProductDetails from "@/components/singleProducts/ProductDetails";
import {Shop }from "../components/shop/page"
import ProductPage from "@/components/singleProducts/productpage";
import RelatedProducts from "@/components/singleProducts/RelatedProduct";
 export default function Home() {
   return (
     <div>
    <Navbar />
    <HeroSection />
    <ProductShowcase />
    <TopPicks />
    <NewArrivals />
    <BlogSection />
    <InstagramSection />
    <Footer />
    <Shopbar />
    

 
    {/* <Breadcrumb /> */}
    <ProductDetails />
       <ProductPage />
      <RelatedProducts />
      <Shop/>
    </div>
   )
}