
import android from "../assets/android.svg";
import kotlin from "../assets/kotlin.svg";
import aws from "../assets/aws.svg";
import java from "../assets/java.svg";
import react from "../assets/react.svg";

const Technologies = () => {
    const width = 100
    const height = 50
    const products = [
        {
          id: 1,
          name: 'Android',
         
          imageSrc: android,
       
        
        },
        {
            id: 2,
            name: 'Java',
            imageSrc: java,
          },
          {
            id: 3,
            name: 'Kotlin',
            imageSrc: kotlin ,
          },
          {
            id: 4,
            name: 'AWS',
            imageSrc: aws,
          },
          {
            id: 5,
            name: 'react',
            imageSrc: react,
          },
        // More products...
      ]
    return (
       
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
       

        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Technologies
          </h1>
      </div>
    </div>


    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
               
                src={product.imageSrc}
                className="w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                   
                  </h3>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      </main>
             
             
       

    )
}

export default Technologies

