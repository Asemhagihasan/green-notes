import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/state/UIState";

const MobileSidebar = ({ navItems }: { navItems: NavItem[] }) => {
  const pathName = usePathname();
  const { toggleSidebar, isOpen } = useSidebarStore();

  return (
    <Sheet open={isOpen} onOpenChange={toggleSidebar}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <SheetHeader className="mt-6">
          <SheetTitle>لوحة التحكم</SheetTitle>
        </SheetHeader>
        <aside className="flex flex-col space-y-2 px-4">
          {navItems.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Button
                key={item.href}
                variant={isActive ? "default" : "ghost"}
                size="lg"
                className="flex items-center justify-start space-x-2 w-full"
                onClick={toggleSidebar}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            );
          })}
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
