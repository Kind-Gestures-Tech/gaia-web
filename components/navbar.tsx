import * as React from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const { data: session, status } = useSession();

  const renderRoleSpecificLinks = () => {
    if (!session) return null;

    switch (session.user.role) {
      case "SYSTEM_ADMIN":
        return (
          <>
            <Link
              href={process.env.NEXT_PUBLIC_ADMIN_URL || ""}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Admin Dashboard
            </Link>
            {/* Add more admin-specific links here */}
          </>
        );
      case "DOCTOR":
        return (
          <>
            <Link
              href={process.env.NEXT_PUBLIC_DOCTOR_URL || ""}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Doctor Dashboard
            </Link>
          </>
        );
      case "PATIENT":
        return (
          <>
            <Link
              href={process.env.NEXT_PUBLIC_PATIENT_URL || ""}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Patient Dashboard
            </Link>
            {/* Add more patient-specific links here */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Gaia</span>
                <Image src="/logo.png" width={32} height={32} alt="Logo" />
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
              {status === "authenticated" ? (
                <>
                  {renderRoleSpecificLinks()}
                  <Button onClick={() => signOut()}>
                    Sign Out
                    <LogOut className="ml-2" size={18} />
                  </Button>
                </>
              ) : (
                <Button onClick={() => signIn()}>
                  Sign In
                  <LogIn className="ml-2" size={18} />
                </Button>
              )}
              <ModeToggle />
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <span className="sr-only">Open main menu</span>
                {showMobileMenu ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
          <Dialog
            className="lg:hidden"
            open={showMobileMenu}
            onClose={() => setShowMobileMenu(false)}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Gaia</span>
                  <Image src="/logo.png" width={32} height={32} alt="Logo" />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                    {status === "authenticated" ? (
                      <>
                        {renderRoleSpecificLinks()}
                        <Button
                          onClick={() => signOut()}
                          className="mt-4 w-full"
                        >
                          Sign Out
                          <LogOut className="ml-2" size={18} />
                        </Button>
                      </>
                    ) : (
                      <Button onClick={() => signIn()} className="mt-4 w-full">
                        Sign In
                        <LogIn className="ml-2" size={18} />
                      </Button>
                    )}
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </>
  );
}
