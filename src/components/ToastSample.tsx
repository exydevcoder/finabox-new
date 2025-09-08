import { CircleX } from 'lucide-react';
import { toast } from 'sonner';
import FadeIn from './animations/fade-in';
import HoverCard from './animations/hover-card';
import { Button } from './ui/button';

export default function ToastSample() {
  const handleClick = () => {
    toast.custom(t => (
      // for custom success message
      <div className="gradientBgColor text-white px-4 py-3 rounded-lg shadow-md flex items-start justify-between w-full max-w-sm">
        <div>
          <p className="font-bold">Message sent successfully!</p>
          <p className="text-sm text-green-100">Thank you for contacting us. We'll get back to you soon.</p>
        </div>
        <CircleX onClick={() => toast.dismiss()} className="ml-7 cursor-pointer" />
      </div>
    ));
  };

  const errorClick = () => {
    // for custom error message
    toast.custom(t => (
      <div className="bg-[#b91c1c] text-white px-4 py-3 rounded shadow-md flex items-start justify-between w-full max-w-sm">
        <div>
          <p className="font-bold">Failed to send message</p>
          <p className="text-sm text-green-100">Oops! Something went wrong. Please try again later.</p>
        </div>
        <CircleX onClick={() => toast.dismiss()} className="ml-7 cursor-pointer" />
      </div>
    ));
  };

  return (
    <FadeIn direction="left" delay={0.5} duration={0.6} className="flex flex-col sm:flex-row gap-3">
      <HoverCard hoverScale={1.03} hoverElevation>
        <Button variant="customWithGradient" className="gap-3 transition-all duration-300 hover:shadow-[0_0_15px_rgba(137,33,255,0.3)]" onClick={handleClick}>
          Success Msg
        </Button>
      </HoverCard>
      <HoverCard hoverScale={1.03} hoverElevation>
        <Button variant="customWithGradient" className="bg-white text-black gap-3 hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" onClick={errorClick}>
          Error Msg
        </Button>
      </HoverCard>
    </FadeIn>
  );
}
