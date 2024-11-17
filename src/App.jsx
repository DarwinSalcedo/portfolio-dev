import Brief from "./components/Brief";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";


export default function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
     <div className="fixed inset-0 -z-10">
      
     <div class="relative h-full w-full bg-white"><div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div>
     </div>

     <div className="container mx-auto px-8">
      <Navbar/>
      <Brief/>
      <Technologies/>
      
      </div>
 
     
    </div>
  
  )
}

