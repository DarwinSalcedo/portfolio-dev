import { Github, Linkedin } from "lucide-react"

const Navbar = () => {
    return (
         <header className="flex items-center justify-between py-8">
          <div />
          <nav className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/darwin-salcedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Linkedin
                className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://github.com/DarwinSalcedo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Github
                className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                strokeWidth={1.5}
              />
            </a>
          </nav>
        </header>
      
        
    )
}

export default Navbar