'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full px-0">
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="font-bold text-xl">
              ASTRA
            </Link>
            <Button variant="ghost" onClick={() => setOpen(false)} className="p-2">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col px-6 py-4 space-y-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="company" className="border-none">
              <AccordionTrigger className="py-2 hover:no-underline">
                COMPANY
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  <Link 
                    href="/about" 
                    onClick={() => setOpen(false)}
                    className="py-2 hover:text-navy-600"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/careers" 
                    onClick={() => setOpen(false)}
                    className="py-2 hover:text-navy-600"
                  >
                    Careers
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link 
            href="/how-it-works" 
            onClick={() => setOpen(false)}
            className="py-2 hover:text-navy-600"
          >
            HOW IT WORKS
          </Link>
          <Link 
            href="/resources" 
            onClick={() => setOpen(false)}
            className="py-2 hover:text-navy-600"
          >
            RESOURCES
          </Link>
          <div className="pt-4">
            <Link href="/how-it-works" onClick={() => setOpen(false)}>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                SCHEDULE DEMO
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

