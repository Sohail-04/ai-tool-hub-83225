import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const MobileNav = ({ navItems }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-foreground hover:text-green-400">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-gray-900 text-white border-gray-800 w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-green-400 text-2xl font-bold text-left">
            AI Tool Hub
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <SheetClose asChild>
                  <Link
                    to={item.path}
                    className="block text-lg text-gray-300 hover:text-green-400 transition-colors py-2 px-3 rounded-md hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
