import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MobileNav } from "./mobile-nav"

export function Navigation() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-navy-100">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-navy-900">ASTRA</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-navy-700">COMPANY</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link href="/about" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-navy-50">
                      <div className="text-sm font-medium text-navy-900">About Us</div>
                      <div className="line-clamp-2 text-sm leading-snug text-navy-600">Learn about our mission and team</div>
                    </Link>
                    <Link href="/careers" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-navy-50">
                      <div className="text-sm font-medium text-navy-900">Careers</div>
                      <div className="line-clamp-2 text-sm leading-snug text-navy-600">Join our growing team</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-navy-50 text-navy-700">
                    HOW IT WORKS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-navy-50 text-navy-700">
                    RESOURCES
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-4">
            <Link href="/how-it-works">
              <Button variant="default" className="bg-green-500 hover:bg-green-600 text-white">
                SCHEDULE DEMO
              </Button>
            </Link>
          </div>
        </div>

        <MobileNav />
      </nav>
    </header>
  )
}

