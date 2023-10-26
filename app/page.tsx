"use client";

import CodeHighlight from "@/components/code-blocks/example";
import { ProfileForm } from "@/components/forms/Form";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <MaxWidthWrapper className="p-12 flex flex-col">
      <section className="flex flex-col text-center gap-5">
        <h1 className="text-4xl font-bold">Shadcn is awesome!</h1>
        <p className="text-2xl text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat
          dolorum nam aliquid vitae error minima soluta delectus, dolorem iste
          rem consequuntur, unde dolores ex ad? Dolorem et voluptate quis.
        </p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Button variant={"secondary"}>Learn More</Button>
          <Button>Get Started!</Button>
        </div>
      </section>
      <div className="mt-14 flex justify-between">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <ProfileForm />
      </div>
      <div className="flex justify-center items-center mt-10">
        <CodeHighlight />
      </div>
    </MaxWidthWrapper>
  );
}
