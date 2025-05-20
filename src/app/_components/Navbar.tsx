'use client'
import { CiHome, CiSun, CiDark } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import NavItem from "./navItem";
import { CiLogin } from "react-icons/ci";
import { useTheme, type ThemeProviderProps } from "next-themes";
import { useRouter } from "next/navigation";



export interface NavItemProps {
  name: string;
  title: string;
  subTitle: string;
  onClick: () => void;
  icon: React.ReactNode;
  isActive: boolean;
}



export default function Navbar() {


  const handleDarkMode = () => {
    setTheme?.(theme === "dark" ? "light" : "dark");
  }

  const router = useRouter();

  const navItems: NavItemProps[] = [
    {
      name: "Home",
      title: "Home",
      subTitle: "Home",
      onClick: () => {
        router.push("/");
      },
      icon: <CiHome />,
      isActive: true,
    },
    {
      name: "Calendar",
      title: "Calendar",
      subTitle: "Calendar",
      onClick: () => {
        router.push("/booking");
      },
      icon: <CiCalendar />,
      isActive: true,
    },
    {
      name: "Login",
      title: "Login",
      subTitle: "Login",
      onClick: () => {
        router.push("/login");
      },
      icon: <CiLogin />,
      isActive: true,
    },
    {
      name: "Dark Mode",
      title: "Dark Mode",
      subTitle: "Dark Mode",
      onClick: () => handleDarkMode(),
      icon: <CiDark />,
      isActive: false,
    },
  ];


  const themeData = (useTheme as unknown as () => { theme?: string; setTheme?: (theme: string) => void })();
  const theme = themeData?.theme;
  const setTheme = themeData?.setTheme;


  return (
    <div className="absolute top-0  flex h-fit w-full justify-center items-center p-4 flex-row z-20 pl-8">
      <div className="flex gap-8 flex-row items-center justify-center  h-fit">
        {navItems.map((item) => (
          item.isActive && <NavItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
