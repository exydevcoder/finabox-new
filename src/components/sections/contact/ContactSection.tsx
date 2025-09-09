'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { CircleX } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import FadeIn from '@/components/animations/fade-in';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import FormInputField from '@/components/ui/form-input-field';
import { db } from '@/lib/firebase';
import { formSchema } from '@/lib/formSchema';
import HoverCard from '@/components/animations/hover-card';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      nin: ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        ...values,
        timestamp: new Date(),
        status: 'pending'
      });

      toast.custom(t => (
        <div className="gradientBgColor text-white px-4 py-3 rounded-lg shadow-md flex items-start justify-between w-full max-w-sm">
          <div>
            <p className="font-bold">Message sent successfully!</p>
            <p className="text-sm text-green-100">Thank you for contacting us. We'll get back to you soon.</p>
          </div>
          <CircleX onClick={() => toast.dismiss(t)} className="ml-7 cursor-pointer hover:opacity-70 transition-opacity" size={20} />
        </div>
      ));

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);

      toast.custom(t => (
        <div className="bg-[#b91c1c] text-white px-4 py-3 rounded shadow-md flex items-start justify-between w-full max-w-sm">
          <div>
            <p className="font-bold">Failed to send message</p>
            <p className="text-sm text-red-100">Oops! Something went wrong. Please try again later.</p>
          </div>
          <CircleX onClick={() => toast.dismiss(t)} className="ml-7 cursor-pointer hover:opacity-70 transition-opacity" size={20} />
        </div>
      ));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="px-8 w-full flex items-center justify-center py-[96px]">
      <div className="container">
        <div className="max-w-[592px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <FadeIn direction="up" delay={0.2} distance={40} duration={0.8}>
              <Badge variant="customBadgeStyle">Ready to Get Started?</Badge>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} distance={40} duration={0.8}>
              <h1 className="text-center text-white text-4xl font-semibold leading-10">Secure Your Slot Today</h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
              <p className="w-80 text-center text-white/70 text-base font-normal leading-6">Fill a quick form to apply as a Finabox Agent in your state.</p>
            </FadeIn>
          </div>

          <div className="max-w-[448px] mx-auto mt-8 px-10 py-8 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] backdrop-blur-sm border-t border-l border-r border-indigo-600">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
                  <FormInputField control={form.control} name="fullName" label="Full Name" placeholder="Enter your full name" />
                </FadeIn>

                <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
                  <FormInputField control={form.control} name="phoneNumber" label="Phone Number" placeholder="Enter your phone number" type="tel" />
                </FadeIn>

                <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
                  <FormInputField control={form.control} name="email" label="Email Address" placeholder="Enter your email address" type="email" />
                </FadeIn>

                <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
                  <FormInputField control={form.control} name="nin" label="National Identification Number (NIN)" placeholder="Enter your 11-digit NIN" maxLength={11} />
                </FadeIn>

                <FadeIn direction="left" delay={0.5} duration={0.6} className="w-full">
                  <HoverCard hoverScale={1.01} hoverElevation>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-3 w-full !h-[56px] gradientBgColor disabled:bg-indigo-600/60 disabled:cursor-not-allowed text-center text-white text-base font-medium leading-tight tracking-wide py-2.5 rounded-full transition-colors"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting...
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </HoverCard>
                </FadeIn>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
