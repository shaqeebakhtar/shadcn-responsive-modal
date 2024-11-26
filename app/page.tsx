import DemoModal from '@/components/demo-modal';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-md mx-auto grid place-items-center px-4 lg:px-10">
      <div className="flex flex-col items-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-center">
            ShadCN Responsive Modal
          </h1>
          <p className="text-center text-muted-foreground text-base sm:text-lg">
            A standalone component for creating responsive modals, built by
            combining{' '}
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary font-medium"
            >
              ShadCN&apos;s
            </Link>{' '}
            <Link
              href="https://ui.shadcn.com/docs/components/dialog"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary font-medium"
            >
              Dialog
            </Link>{' '}
            and{' '}
            <Link
              href="https://ui.shadcn.com/docs/components/drawer"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary font-medium"
            >
              Drawer
            </Link>{' '}
            (Built on top of{' '}
            <Link
              href="https://github.com/emilkowalski/vaul"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary font-medium"
            >
              Vaul
            </Link>{' '}
            by{' '}
            <Link
              href="https://twitter.com/emilkowalski_"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary font-medium"
            >
              emilkowalski_
            </Link>
            ) components.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <DemoModal />
          <Link
            href="https://github.com/shaqeebakhtar/shadcn-responsive-modal"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: 'outline' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github size-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
