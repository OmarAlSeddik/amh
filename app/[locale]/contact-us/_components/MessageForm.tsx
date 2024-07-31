import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MessageFormImage from "@/public/contact/message-form.webp";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

const MessageForm = () => {
  return (
    <section className="flex justify-center bg-[#191919] text-white">
      <div className="flex flex-1 justify-center py-24">
        <div className="flex max-w-[40rem] flex-col gap-4">
          <h1 className="h1">Get in Touch</h1>
          <Separator className="h-px bg-white" />
          <p>Your questions, answered</p>
          <div className="flex">
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" className="bg-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" className="bg-transparent" />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="email-address">Email Address</Label>
              <Input id="email-address" className="bg-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" className="bg-transparent" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Leave Us a Message</Label>
            <Textarea className="bg-transparent" id="message" />
          </div>
          <div className="flex flex-col gap-2">
            <Button className="w-32">Send Message</Button>
            <small>We&apos;ve received your message!</small>
          </div>
        </div>
      </div>
      <Image
        src={MessageFormImage}
        alt="Message Form"
        className="hidden w-1/2 flex-1 object-cover lg:block"
      />
    </section>
  );
};

export default MessageForm;
