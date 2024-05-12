import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col items-center rounded-md bg-primary p-16 text-secondary dark:bg-primary-foreground dark:text-secondary-foreground">
      <h2 className="text-center">Call to action</h2>
      <p className="pb-6 pt-4 text-center lg:max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button variant="secondary">Get Started</Button>
    </section>
  );
};

export default CallToAction;
