import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ModeToggle } from "@/components/toggle-theme/toggleTheme";
import Image from "next/image";

export default function NavBar() {
  return (
    <MaxWidthWrapper className="p-12 flex flex-col">
      <section className="flex justify-between">
        <Image src="/assets/parrot.svg" alt="Logo" width={40} height={40} />
        <ModeToggle />
      </section>
    </MaxWidthWrapper>
  );
}
