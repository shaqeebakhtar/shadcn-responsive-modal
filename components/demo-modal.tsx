'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
import { Input } from './ui/input';

function DemoModal() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Modal open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent className="p-4 sm:p-8">
        <ModalHeader>
          <ModalTitle>Subscribe to Our Newsletter</ModalTitle>
          <ModalDescription>
            Stay updated with the latest news and exclusive offers. Enter your
            email address below to subscribe to our newsletter.
          </ModalDescription>
        </ModalHeader>
        <form
          className="space-y-4 mt-1.5"
          onSubmit={(e) => {
            e.preventDefault();
            setIsDialogOpen(false);
          }}
        >
          <Input type="email" id="email" placeholder="shadcn@example.com" />
          <ModalFooter className="flex-col-reverse p-0">
            <ModalClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </ModalClose>
            <Button type="submit">Subscribe</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default DemoModal;
