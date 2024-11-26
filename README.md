# ShadCN Responsive Modal

A standalone component for creating responsive modals, built by combining [ShadCN](https://ui.shadcn.com/) [Dialog](https://ui.shadcn.com/docs/components/dialog) and [Drawer](https://ui.shadcn.com/docs/components/drawer) (Built on top of [Vaul](https://github.com/emilkowalski/vaul) by [emilkowalski\_](https://twitter.com/emilkowalski_)) components.

## Installation

1. Install the following dependencies

```bash
npx shadcn@latest add dialog drawer
```

2. Create a `use-mobile.tsx` file and paste the below code to use `useIsMobile` hook

```tsx
import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener('change', onChange);

    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}
```

3. Copy and paste the following code into your project.

```tsx
'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ModalRootProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ModalBaseProps {
  children: React.ReactNode;
  className?: string;
  asChild?: true;
}

const Modal = ({ children, ...props }: ModalRootProps) => {
  const isMobile = useIsMobile();

  const Modal = isMobile ? Drawer : Dialog;

  return <Modal {...props}>{children}</Modal>;
};

const ModalTrigger = ({ className, children, ...props }: ModalBaseProps) => {
  const isMobile = useIsMobile();

  const ModalTrigger = isMobile ? DrawerTrigger : DialogTrigger;

  return (
    <ModalTrigger className={className} {...props}>
      {children}
    </ModalTrigger>
  );
};

const ModalContent = ({ className, children, ...props }: ModalBaseProps) => {
  const isMobile = useIsMobile();

  const ModalContent = isMobile ? DrawerContent : DialogContent;

  return (
    <ModalContent className={className} {...props}>
      {children}
    </ModalContent>
  );
};

const ModalHeader = ({ className, children, ...props }: ModalBaseProps) => {
  const isMobile = useIsMobile();

  const ModalHeader = isMobile ? DrawerHeader : DialogHeader;

  return (
    <ModalHeader className={className} {...props}>
      {children}
    </ModalHeader>
  );
};

const ModalTitle = ({ className, children, ...props }: ModalBaseProps) => {
  const isMobile = useIsMobile();

  const ModalTitle = isMobile ? DrawerTitle : DialogTitle;

  return (
    <ModalTitle className={className} {...props}>
      {children}
    </ModalTitle>
  );
};

const ModalDescription = ({
  className,
  children,
  ...props
}: ModalBaseProps) => {
  const isMobile = useIsMobile();

  const ModalDescription = isMobile ? DrawerDescription : DialogDescription;

  return (
    <ModalDescription className={className} {...props}>
      {children}
    </ModalDescription>
  );
};

const ModalFooter = ({ className, children, ...props }: ModalBaseProps) => {
  const isMobile = useIsMobile();

  const ModalFooter = isMobile ? DrawerFooter : DialogFooter;

  return (
    <ModalFooter className={className} {...props}>
      {children}
    </ModalFooter>
  );
};

const ModalClose = ({ className, children, ...props }: ModalBaseProps) => {
  const isMobile = useIsMobile();

  const ModalClose = isMobile ? DrawerClose : DialogClose;

  return (
    <ModalClose className={className} {...props}>
      {children}
    </ModalClose>
  );
};

export {
  Modal,
  ModalTrigger,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
};
```

4. Update the import paths to match your project setup.

## Usage

```tsx
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal';
```

```tsx
<Modal>
  <ModalTrigger>Open Modal</ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Are you absolutely sure?</ModalTitle>
      <ModalDescription>This action cannot be undone.</ModalDescription>
    </ModalHeader>
    <ModalFooter>
      <ModalClose asChild>
        <Button variant="outline">Cancel</Button>
      </ModalClose>
      <Button>Submit</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```
