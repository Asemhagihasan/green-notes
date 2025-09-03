import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

const Navigation = ({
  navItems,
}: {
  navItems: { name: string; href: string; icon: LucideIcon }[];
}) => {
  const pathName = usePathname();
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => {
        const isActive = pathName === item.href;
        return (
          <Button
            key={item.href}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            className="flex items-center space-x-2"
            asChild
          >
            <Link href={item.href}>
              <item.icon className="w-4 h-4" />
              <span className="">{item.name}</span>
            </Link>
          </Button>
        );
      })}
    </nav>
  );
};

export default Navigation;
